<?php

namespace App\Factory;

use App\Entity\Price;
use App\Entity\Product;
use App\Repository\ProductRepository;
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
    public function __construct()
    {
        parent::__construct();

        // TODO inject services if required (https://github.com/zenstruck/foundry#factories-as-services)
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
        // see https://github.com/zenstruck/foundry#initialization
        return $this
            // ->afterInstantiate(function(Product $product) {})
        ;
    }

    protected static function getClass(): string
    {
        return Product::class;
    }
}
