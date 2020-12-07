<?php

namespace App\Factory;

use App\Entity\Category;
use App\Repository\CategoryRepository;
use Zenstruck\Foundry\RepositoryProxy;
use Zenstruck\Foundry\ModelFactory;
use Zenstruck\Foundry\Proxy;

/**
 * @method static Category|Proxy findOrCreate(array $attributes)
 * @method static Category|Proxy random()
 * @method static Category[]|Proxy[] randomSet(int $number)
 * @method static Category[]|Proxy[] randomRange(int $min, int $max)
 * @method static CategoryRepository|RepositoryProxy repository()
 * @method Category|Proxy create($attributes = [])
 * @method Category[]|Proxy[] createMany(int $number, $attributes = [])
 */
final class CategoryFactory extends ModelFactory
{
    public function __construct()
    {
        parent::__construct();

        // TODO inject services if required (https://github.com/zenstruck/foundry#factories-as-services)
    }

    protected function getDefaults(): array
    {
        return [
            // TODO add your default values here (https://github.com/zenstruck/foundry#model-factories)
            'name' => self::faker()->unique()->bloodGroup,
            'description' => self::faker()->paragraphs(
                self::faker()->numberBetween(1, 4),
                true
            )
        ];
    }

    protected function initialize(): self
    {
        // see https://github.com/zenstruck/foundry#initialization
        return $this
            // ->afterInstantiate(function(Category $category) {})
        ;
    }

    protected static function getClass(): string
    {
        return Category::class;
    }
}
