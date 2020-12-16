<?php

namespace App\Twig;

use App\Service\UploaderHelper;
use Twig\Extension\AbstractExtension;
use Twig\TwigFilter;
use Twig\TwigFunction;

class AssetUploadExtension extends AbstractExtension
{
    /**
     * @var UploaderHelper
     */
    private UploaderHelper $uploaderHelper;

    public function __construct(UploaderHelper $uploaderHelper)
    {
        $this->uploaderHelper = $uploaderHelper;
    }

    public function getFunctions(): array
    {
        return [
            new TwigFunction('uploaded_asset', [$this, 'getUploadedAssetPath']),
        ];
    }

    public function getUploadedAssetPath(string $path): string
    {
        return $this->uploaderHelper
            ->getPublicPath($path);
    }
}
