<?php

namespace App\Entity;

use App\Repository\UserRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=UserRepository::class)
 * @ORM\Table(name="`user`")
 */
class User
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $firstName;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $lastName;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $email;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $password;

    /**
     * @ORM\Column(type="integer")
     */
    private $gender;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $city;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $experience;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $objective;

    /**
     * @ORM\Column(type="text", nullable=true)
     */
    private $description;

    /**
     * @ORM\Column(type="datetime_immutable")
     */
    private $createdAt;

    /**
     * @ORM\Column(type="datetime_immutable", nullable=true)
     */
    private $updatedAt;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $roles;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $picture;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $artistRef;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $songRef;

    /**
     * @ORM\Column(type="integer", nullable=true)
     */
    private $practiceYears;

    /**
     * @ORM\ManyToMany(targetEntity=User::class, inversedBy="userLikes")
     */
    private $favoriteUsers;

    /**
     * @ORM\ManyToMany(targetEntity=User::class, mappedBy="favoriteUsers")
     */
    private $userLikes;

    /**
     * @ORM\ManyToMany(targetEntity=Band::class, inversedBy="userLikes")
     */
    private $favoriteBands;

    /**
     * @ORM\ManyToMany(targetEntity=Band::class, mappedBy="favoriteUsers")
     */
    private $bandLikes;

    /**
     * @ORM\ManyToMany(targetEntity=Instrument::class, mappedBy="users")
     */
    private $instruments;

    /**
     * @ORM\OneToMany(targetEntity=Advertisement::class, mappedBy="userOwner")
     */
    private $advertisements;

    /**
     * @ORM\ManyToMany(targetEntity=Style::class, mappedBy="users")
     */
    private $styles;

    /**
     * @ORM\OneToMany(targetEntity=Message::class, mappedBy="toUser")
     */
    private $messages;

    /**
     * @ORM\OneToMany(targetEntity=Message::class, mappedBy="fromUser")
     */
    private $sentMessages;

    /**
     * @ORM\ManyToMany(targetEntity=Advertisement::class, inversedBy="userLikes")
     */
    private $favoriteAds;

    public function __construct()
    {
        $this->favoriteUsers = new ArrayCollection();
        $this->userLikes = new ArrayCollection();
        $this->favoriteBands = new ArrayCollection();
        $this->bandLikes = new ArrayCollection();
        $this->instruments = new ArrayCollection();
        $this->advertisements = new ArrayCollection();
        $this->styles = new ArrayCollection();
        $this->messages = new ArrayCollection();
        $this->sentMessages = new ArrayCollection();
        $this->favoriteAds = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getFirstName(): ?string
    {
        return $this->firstName;
    }

    public function setFirstName(string $firstName): self
    {
        $this->firstName = $firstName;

        return $this;
    }

    public function getLastName(): ?string
    {
        return $this->lastName;
    }

    public function setLastName(string $lastName): self
    {
        $this->lastName = $lastName;

        return $this;
    }

    public function getEmail(): ?string
    {
        return $this->email;
    }

    public function setEmail(string $email): self
    {
        $this->email = $email;

        return $this;
    }

    public function getPassword(): ?string
    {
        return $this->password;
    }

    public function setPassword(string $password): self
    {
        $this->password = $password;

        return $this;
    }

    public function getGender(): ?int
    {
        return $this->gender;
    }

    public function setGender(int $gender): self
    {
        $this->gender = $gender;

        return $this;
    }

    public function getCity(): ?string
    {
        return $this->city;
    }

    public function setCity(string $city): self
    {
        $this->city = $city;

        return $this;
    }

    public function getExperience(): ?string
    {
        return $this->experience;
    }

    public function setExperience(string $experience): self
    {
        $this->experience = $experience;

        return $this;
    }

    public function getObjective(): ?string
    {
        return $this->objective;
    }

    public function setObjective(string $objective): self
    {
        $this->objective = $objective;

        return $this;
    }

    public function getDescription(): ?string
    {
        return $this->description;
    }

    public function setDescription(?string $description): self
    {
        $this->description = $description;

        return $this;
    }

    public function getCreatedAt(): ?\DateTimeImmutable
    {
        return $this->createdAt;
    }

    public function setCreatedAt(\DateTimeImmutable $createdAt): self
    {
        $this->createdAt = $createdAt;

        return $this;
    }

    public function getUpdatedAt(): ?\DateTimeImmutable
    {
        return $this->updatedAt;
    }

    public function setUpdatedAt(?\DateTimeImmutable $updatedAt): self
    {
        $this->updatedAt = $updatedAt;

        return $this;
    }

    public function getRoles(): ?string
    {
        return $this->roles;
    }

    public function setRoles(string $roles): self
    {
        $this->roles = $roles;

        return $this;
    }

    public function getPicture(): ?string
    {
        return $this->picture;
    }

    public function setPicture(?string $picture): self
    {
        $this->picture = $picture;

        return $this;
    }

    public function getArtistRef(): ?string
    {
        return $this->artistRef;
    }

    public function setArtistRef(?string $artistRef): self
    {
        $this->artistRef = $artistRef;

        return $this;
    }

    public function getSongRef(): ?string
    {
        return $this->songRef;
    }

    public function setSongRef(?string $songRef): self
    {
        $this->songRef = $songRef;

        return $this;
    }

    public function getPracticeYears(): ?int
    {
        return $this->practiceYears;
    }

    public function setPracticeYears(?int $practiceYears): self
    {
        $this->practiceYears = $practiceYears;

        return $this;
    }

    /**
     * @return Collection|self[]
     */
    public function getFavoriteUsers(): Collection
    {
        return $this->favoriteUsers;
    }

    public function addFavoriteUser(self $favoriteUser): self
    {
        if (!$this->favoriteUsers->contains($favoriteUser)) {
            $this->favoriteUsers[] = $favoriteUser;
        }

        return $this;
    }

    public function removeFavoriteUser(self $favoriteUser): self
    {
        $this->favoriteUsers->removeElement($favoriteUser);

        return $this;
    }

    /**
     * @return Collection|self[]
     */
    public function getUserLikes(): Collection
    {
        return $this->userLikes;
    }

    public function addUserLike(self $userLike): self
    {
        if (!$this->userLikes->contains($userLike)) {
            $this->userLikes[] = $userLike;
            $userLike->addFavoriteUser($this);
        }

        return $this;
    }

    public function removeUserLike(self $userLike): self
    {
        if ($this->userLikes->removeElement($userLike)) {
            $userLike->removeFavoriteUser($this);
        }

        return $this;
    }

    /**
     * @return Collection|Band[]
     */
    public function getFavoriteBands(): Collection
    {
        return $this->favoriteBands;
    }

    public function addFavoriteBand(Band $favoriteBand): self
    {
        if (!$this->favoriteBands->contains($favoriteBand)) {
            $this->favoriteBands[] = $favoriteBand;
        }

        return $this;
    }

    public function removeFavoriteBand(Band $favoriteBand): self
    {
        $this->favoriteBands->removeElement($favoriteBand);

        return $this;
    }

    /**
     * @return Collection|Band[]
     */
    public function getBandLikes(): Collection
    {
        return $this->bandLikes;
    }

    public function addBandLike(Band $bandLike): self
    {
        if (!$this->bandLikes->contains($bandLike)) {
            $this->bandLikes[] = $bandLike;
            $bandLike->addFavoriteUser($this);
        }

        return $this;
    }

    public function removeBandLike(Band $bandLike): self
    {
        if ($this->bandLikes->removeElement($bandLike)) {
            $bandLike->removeFavoriteUser($this);
        }

        return $this;
    }

    /**
     * @return Collection|Instrument[]
     */
    public function getInstruments(): Collection
    {
        return $this->instruments;
    }

    public function addInstrument(Instrument $instrument): self
    {
        if (!$this->instruments->contains($instrument)) {
            $this->instruments[] = $instrument;
            $instrument->addUser($this);
        }

        return $this;
    }

    public function removeInstrument(Instrument $instrument): self
    {
        if ($this->instruments->removeElement($instrument)) {
            $instrument->removeUser($this);
        }

        return $this;
    }

    /**
     * @return Collection|Advertisement[]
     */
    public function getAdvertisements(): Collection
    {
        return $this->advertisements;
    }

    public function addAdvertisement(Advertisement $advertisement): self
    {
        if (!$this->advertisements->contains($advertisement)) {
            $this->advertisements[] = $advertisement;
            $advertisement->setUserOwner($this);
        }

        return $this;
    }

    public function removeAdvertisement(Advertisement $advertisement): self
    {
        if ($this->advertisements->removeElement($advertisement)) {
            // set the owning side to null (unless already changed)
            if ($advertisement->getUserOwner() === $this) {
                $advertisement->setUserOwner(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection|Style[]
     */
    public function getStyles(): Collection
    {
        return $this->styles;
    }

    public function addStyle(Style $style): self
    {
        if (!$this->styles->contains($style)) {
            $this->styles[] = $style;
            $style->addUser($this);
        }

        return $this;
    }

    public function removeStyle(Style $style): self
    {
        if ($this->styles->removeElement($style)) {
            $style->removeUser($this);
        }

        return $this;
    }

    /**
     * @return Collection|Message[]
     */
    public function getMessages(): Collection
    {
        return $this->messages;
    }

    public function addMessage(Message $message): self
    {
        if (!$this->messages->contains($message)) {
            $this->messages[] = $message;
            $message->setToUser($this);
        }

        return $this;
    }

    public function removeMessage(Message $message): self
    {
        if ($this->messages->removeElement($message)) {
            // set the owning side to null (unless already changed)
            if ($message->getToUser() === $this) {
                $message->setToUser(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection|Message[]
     */
    public function getSentMessages(): Collection
    {
        return $this->sentMessages;
    }

    public function addSentMessage(Message $sentMessage): self
    {
        if (!$this->sentMessages->contains($sentMessage)) {
            $this->sentMessages[] = $sentMessage;
            $sentMessage->setFromUser($this);
        }

        return $this;
    }

    public function removeSentMessage(Message $sentMessage): self
    {
        if ($this->sentMessages->removeElement($sentMessage)) {
            // set the owning side to null (unless already changed)
            if ($sentMessage->getFromUser() === $this) {
                $sentMessage->setFromUser(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection|Advertisement[]
     */
    public function getFavoriteAds(): Collection
    {
        return $this->favoriteAds;
    }

    public function addFavoriteAd(Advertisement $favoriteAd): self
    {
        if (!$this->favoriteAds->contains($favoriteAd)) {
            $this->favoriteAds[] = $favoriteAd;
        }

        return $this;
    }

    public function removeFavoriteAd(Advertisement $favoriteAd): self
    {
        $this->favoriteAds->removeElement($favoriteAd);

        return $this;
    }

}
