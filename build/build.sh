#!/bin/sh
LESSC=`which lessc`
CLOSURE_COMPILER=closure-compiler.jar
CLEANCSS=`which cleancss`
PWD=`pwd`
HERE=`echo $PWD | sed 's/ /\\ /g'`

compile_less () {
	checkmd5=0
	if [ -f $1.md5 ]; then
		md5old=`cat $1.md5`
		md5new=`cat $1 | md5 -q | tr -d '[[:space:]]'`
		if [ $md5old = $md5new ]; then
			checkmd5=1
		else
			echo `bansename ${i}`
			echo "Diferent md5 Build Again."
			checkmd5=0
			cat $1 | md5 -q | tr -d '[[:space:]]' > $1.md5
		fi
	else
		cat $1 | md5 -q | tr -d '[[:space:]]' > $1.md5
		checkmd5=0
	fi

	if [ ! -f ${2} ]; then
		checkmd5=0
	fi

	if [ $checkmd5 -eq 0 ]; then
		mkdir -p `dirname ${2}`
		echo "${LESSC} --clean-css ${1} > ${2}"
		${LESSC} --clean-css "${1}" > "${2}"
	fi
   return 0
}


find . -type f \( -iname \*.jpeg -o -iname \*.png -o -iname \*.map \) -type f -print0 | while read -d $'\0' i
do
    if [ ! -d "$i" ]; then
        dest_file=`echo $i | sed 's/\.\/plugins\///'`
        echo "Processing ${dest_file}"
        if [ -z "$dest_file" ]; then continue; fi;
        dir_file=`dirname "${dest_file}"`
        checkmd5=0
        if [ -f plugins/$dest_file.md5 ]; then
            md5old=`cat plugins/$dest_file.md5`
            md5new=`cat plugins/$dest_file | md5 -q | tr -d '[[:space:]]'`
            if [ $md5old = $md5new ]; then
                checkmd5=1
            else
                echo "${dest_file}"
                echo "Diferent md5 Build Again."
                checkmd5=0
                cat plugins/$dest_file | md5 -q | tr -d '[[:space:]]' > plugins/$dest_file.md5
            fi
        else
            cat plugins/$dest_file | md5 -q | tr -d '[[:space:]]' > plugins/$dest_file.md5
            checkmd5=0
        fi

        if [ ! -f ${HERE}/../webroot/js/$dir_file/`basename $dest_file` ]; then
            checkmd5=0
        fi

        if [ $checkmd5 -eq 0 ]; then
            mkdir -p ${HERE}/../webroot/js/${dir_file}
            rm -f ${HERE}/../webroot/js/$dir_file/`basename $dest_file`
            echo "cp  plugins/$dest_file ${HERE}/../webroot/js/$dir_file/`basename $dest_file`"
            cp  plugins/$dest_file ${HERE}/../webroot/js/$dir_file/`basename $dest_file`
        fi
    fi
done

find . -name "*.css" -type f -print0 | while read -d $'\0' i
do
    if [ ! -d "$i" ]; then
        dest_file=`echo $i | sed 's/\.\/plugins\///'`
        echo "Processing ${dest_file}"
        if [ -z "$dest_file" ]; then continue; fi;
        dir_file=`dirname "${dest_file}"`
        checkmd5=0
        if [ -f plugins/$dest_file.md5 ]; then
            md5old=`cat plugins/$dest_file.md5`
            md5new=`cat plugins/$dest_file | md5 -q | tr -d '[[:space:]]'`
            if [ $md5old = $md5new ]; then
                checkmd5=1
            else
                echo "${dest_file}"
                echo "Diferent md5 Build Again."
                checkmd5=0
                cat plugins/$dest_file | md5 -q | tr -d '[[:space:]]' > plugins/$dest_file.md5
            fi
        else
            cat plugins/$dest_file | md5 -q | tr -d '[[:space:]]' > plugins/$dest_file.md5
            checkmd5=0
        fi

        if [ ! -f ${HERE}/../webroot/js/$dir_file/`basename $dest_file` ]; then
            checkmd5=0
        fi

        if [ $checkmd5 -eq 0 ]; then
            mkdir -p ${HERE}/../webroot/js/${dir_file}
            mkdir -p ${HERE}/../webroot/css/${dir_file}
            echo "${CLEANCSS} --skip-rebase -o ${HERE}/../webroot/js/$dir_file/`basename $dest_file` plugins/$dest_file"
            ${CLEANCSS} --skip-rebase --source-map-inline-sources -o ${HERE}/../webroot/js/$dir_file/`basename $dest_file` plugins/$dest_file
            ${CLEANCSS} --skip-rebase --source-map-inline-sources -o ${HERE}/../webroot/css/$dir_file/`basename $dest_file` plugins/$dest_file
        fi
    fi
done



find . -name "*.js" -type f -print0 | while read -d $'\0' i
do
	if [ ! -d "$i" ]; then
		dest_file=`echo $i | sed 's/\.\/plugins\///'`
		echo "Processing ${dest_file}"
		if [ -z "$dest_file" ]; then continue; fi;
		dir_file=`dirname "${dest_file}"`
		checkmd5=0
		if [ -f plugins/$dest_file.md5 ]; then
			md5old=`cat plugins/$dest_file.md5`
			md5new=`cat plugins/$dest_file | md5 -q | tr -d '[[:space:]]'`
			if [ $md5old = $md5new ]; then
				checkmd5=1
			else
				echo "${dest_file}"
				echo "Diferent md5 Build Again."
				checkmd5=0
				cat plugins/$dest_file | md5 -q | tr -d '[[:space:]]' > plugins/$dest_file.md5
			fi
		else
			cat plugins/$dest_file | md5 -q | tr -d '[[:space:]]' > plugins/$dest_file.md5
			checkmd5=0
		fi

		if [ ! -f ${HERE}/../webroot/js/$dir_file/`basename $dest_file` ]; then
			checkmd5=0
		fi

		if [ $checkmd5 -eq 0 ]; then
			mkdir -p ${HERE}/../webroot/js/${dir_file}
			echo "java -jar ${CLOSURE_COMPILER} plugins/$dest_file --js_output_file ${HERE}/../webroot/js/$dir_file/`basename $dest_file`"
            java -jar ${CLOSURE_COMPILER} plugins/$dest_file --compilation_level SIMPLE_OPTIMIZATIONS --js_output_file ${HERE}/../webroot/js/$dir_file/`basename $dest_file`  --warning_level QUIET --summary_detail_level 3
		fi
	fi
done

compile_less ${HERE}/less/AdminLTE.less ${HERE}/../webroot/css/AdminLTE.css
compile_less ${HERE}/less/skins/_all-skins.less ${HERE}/../webroot/css/skins/_all-skins.css
compile_less ${HERE}/less/skins/skin-black-light.less ${HERE}/../webroot/css/skins/skin-black-light.css
compile_less ${HERE}/less/skins/skin-black.less ${HERE}/../webroot/css/skins/skin-black.css
compile_less ${HERE}/less/skins/skin-blue-light.less ${HERE}/../webroot/css/skins/skin-blue-light.css
compile_less ${HERE}/less/skins/skin-blue.less ${HERE}/../webroot/css/skins/skin-blue.css
compile_less ${HERE}/less/skins/skin-green-light.less ${HERE}/../webroot/css/skins/skin-green-light.css
compile_less ${HERE}/less/skins/skin-green.less ${HERE}/../webroot/css/skins/skin-green.css
compile_less ${HERE}/less/skins/skin-purple-light.less ${HERE}/../webroot/css/skins/skin-purple-light.css
compile_less ${HERE}/less/skins/skin-purple.less ${HERE}/../webroot/css/skins/skin-purple.css
compile_less ${HERE}/less/skins/skin-red-light.less ${HERE}/../webroot/css/skins/skin-red-light.css
compile_less ${HERE}/less/skins/skin-red.less ${HERE}/../webroot/css/skins/skin-red.css
compile_less ${HERE}/less/skins/skin-yellow-light.less ${HERE}/../webroot/css/skins/skin-yellow-light.css
compile_less ${HERE}/less/skins/skin-yellow.less ${HERE}/../webroot/css/skins/skin-yellow.css
compile_less ${HERE}/bootstrap-less/bootstrap.less ${HERE}/../webroot/css/bootstrap.css
compile_less ${HERE}/font-awesome/4.5.0/less/font-awesome.less ${HERE}/../webroot/css/font-awesome.css
compile_less ${HERE}/ionicons/2.0.1/less/ionicons.less ${HERE}/../webroot/css/ionicons.css