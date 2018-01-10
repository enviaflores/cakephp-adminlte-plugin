<?php
/**
 * Need composer 
 * "spatie/image-optimizer"
 * "eventviva/php-image-resize"
 * 
 * Install 
 * yum install jpegoptim
 * yum install optipng
 * yum install pngquant
 * yum install npm
 * sudo npm install -g svgo
 * yum install gifsicle
 * 
 * @author enmaca
 *
 */
class ImageProcessing
{

    /**
     * 
     * @param string $file_path Image File to crop, resize and optimize
     * @param int $baseRW Final Resize Width
     * @param int $baseRH Final Resize Height
     * @param int $baseCW Final Crop Width
     * @param int $baseCH Final Crop Height
     * @param int $baseCX Final Crop X point
     * @param int $baseCY Final Crop Y point
     * @return string
     */
    public static function process(string $file_path, int $baseRW = null, int $baseRH = null, int $baseCW = null, int $baseCH = null, int $baseCX = null, int $baseCY = null)
    {
        /**
         * Crear el optimizador de imagenes
         */
        $optimizeChain = (new \Spatie\ImageOptimizer\OptimizerChain())->addOptimizer(new \Spatie\ImageOptimizer\Optimizers\Jpegoptim([
            '-m85',
            '--strip-all',
            '--all-progressive'
        ]))
            ->addOptimizer(new \Spatie\ImageOptimizer\Optimizers\Pngquant([
            '--force'
        ]))
            ->addOptimizer(new \Spatie\ImageOptimizer\Optimizers\Optipng([
            '-i0',
            '-o2',
            '-quiet'
        ]))
            ->addOptimizer(new \Spatie\ImageOptimizer\Optimizers\Svgo([
            '--disable=cleanupIDs'
        ]))
            ->addOptimizer(new \Spatie\ImageOptimizer\Optimizers\Gifsicle([
            '-b',
            '-O3'
        ]));
        
        $crop = false;
        $resize = false;
        $final_file = tempnam(sys_get_temp_dir(), '');
        
        if (! empty($baseCX) or ! empty($baseCY) or ! empty($baseCW) or ! empty($baseCH))
            $crop = true;
        
        if (! empty($baseRW) or ! empty($baseRH))
            $resize = true;
        
        if ($crop == true or $resize == true) {
            $imageResizeObj = new \Eventviva\ImageResize($file_path);
            
            if ($crop == true) {
                $imageResizeObj->freecrop($baseCW, $baseCH, $baseCX, $baseCY);
                $croped_file_temp = tempnam(sys_get_temp_dir(), '');
                $imageResizeObj->save($croped_file_temp);
                $imageResizeObj = new \Eventviva\ImageResize($croped_file_temp);
                unlink($croped_file_temp);
            }
            
            if ($resize == true) {
                $imageResizeObj->resize($baseRW, $baseRH, true);
                $imageResizeObj->save($final_file);
                $delete_final_file = true;
            }
        } else {
            copy($file_path, $final_file);
        }
        
        $optimizeChain->optimize($final_file);
        
        return $final_file;
    }
}