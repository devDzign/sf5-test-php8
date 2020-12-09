<?php

namespace App\Factory;

use App\Entity\Price;
use App\Entity\Product;
use App\Repository\ProductRepository;
use App\Service\UploaderHelper;
use Symfony\Component\Filesystem\Filesystem;
use Symfony\Component\HttpFoundation\File\File;
use Zenstruck\Foundry\RepositoryProxy;
use Zenstruck\Foundry\ModelFactory;
use Zenstruck\Foundry\Proxy;

/**
 * @method static Product|Proxy findOrCreate(array $attributes)
 * @method static Product|Proxy random()
 * @method static Product[]|Proxy[] randomSet(int $number)
 * @method static Product[]|Proxy[] randomRange(int $min, int $max)
 * @method static ProductRepository|RepositoryProxy repository()
 * @method Product|Proxy create($attributes = [])
 * @method Product[]|Proxy[] createMany(int $number, $attributes = [])
 */
final class ProductFactory extends ModelFactory
{

    private static array $articleImages = [
        'cake-1.jpeg',
        'cake-2.jpeg',
        'cake-3.jpeg',
    ];
    /**
     * @var UploaderHelper
     */
    private UploaderHelper $uploaderHelper;


    public function __construct(UploaderHelper $uploaderHelper)
    {
        parent::__construct();

        // TODO inject services if required (https://github.com/zenstruck/foundry#factories-as-services)
        $this->uploaderHelper = $uploaderHelper;
    }

    protected function getDefaults(): array
    {
        return [
            'name' => self::faker()->unique()->realText(),
            'description' =>  self::faker()->paragraphs(
                self::faker()->numberBetween(1, 4),
                true
            ),
            'price' => (new Price())
                ->setUnitPrice(self::faker()->randomFloat(10, 3, 1000))
                ->setVat(2.5)
        ];
    }

    protected function initialize(): self
    {
        return $this
             ->afterInstantiate(function (Product $product) {
                 return $product->setNameFile($this->fakeUploadImage());
             })
        ;
    }

    protected static function getClass(): string
    {
        return Product::class;
    }

    private function fakeUploadImage(): string
    {
        $randomImage = self::faker()->randomElement(self::$articleImages);
        $fs = new Filesystem();
        $targetPath = sys_get_temp_dir() . '/' . $randomImage;
        $fs->copy(__DIR__ . '/images/' . $randomImage, $targetPath, true);
        return $this->uploaderHelper
            ->uploadArticleImage(new File($targetPath));
    }
}
