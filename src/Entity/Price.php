<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\Groups;
use Symfony\Component\Validator\Constraints as Assert;

/**
 * Class Price
 * @package App\Entity
 * @ORM\Embeddable
 */
class Price
{
    /**
     * @ORM\Column(type="integer")
     * @Assert\NotBlank
     * @Assert\GreaterThan(0)
     * @Groups({"read_product"})
     */
    private int $unitPrice = 0;

    /**
     * @ORM\Column(type="decimal", precision=5, scale=2)
     * @Assert\NotBlank
     * @Groups({"read_product"})
     */
    private float $vat = 0;

    /**
     * @return int
     */
    public function getUnitPrice(): int
    {
        return $this->unitPrice;
    }

    /**
     * @param int $unitPrice
     *
     * @return $this
     */
    public function setUnitPrice(int $unitPrice): self
    {
        $this->unitPrice = $unitPrice;

        return $this;
    }

    /**
     * @return float|int
     */
    public function getVat()
    {
        return $this->vat;
    }

    /**
     * @param $vat
     *
     * @return $this
     */
    public function setVat($vat): self
    {
        $this->vat = $vat;

        return $this;
    }
}