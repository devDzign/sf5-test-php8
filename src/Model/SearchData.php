<?php

namespace App\Model;

use App\Entity\Category;

class SearchData
{

    /**
     * @var int
     */
    public int $page = 1;

    /**
     * @var string|null
     */
    public ?string $q = '';

    /**
     * @var Category[]
     */
    public array $categories = [];

    /**
     * @var null|integer
     */
    public ?int $max;

    /**
     * @var null|integer
     */
    public ?int $min;

    /**
     * @var boolean
     */
    public bool $promo = false;
}
