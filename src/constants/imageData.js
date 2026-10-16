import Avatar3D from "../../assets/mockimages/3davatar.jpeg";
import Portrait70s from "../../assets/mockimages/70spotrait.jpeg";
import Flashback80s from "../../assets/mockimages/80sflashback.jpg";
import AerialView from "../../assets/mockimages/aerialview.jpg";
import Anime from "../../assets/mockimages/anime.png";
import Caricature from "../../assets/mockimages/caricature.jpg";
import Photobooth from "../../assets/mockimages/photobooth.jpg";
import PinCollection from "../../assets/mockimages/pincollection.jpeg";
import Sketch from "../../assets/mockimages/sketch.jpg";
import Stickers from "../../assets/mockimages/stickers.jpg";
import ThumbAvatar3D from "../../assets/mockimages/thumbs/3davatar.jpeg";
import ThumbPortrait70s from "../../assets/mockimages/thumbs/70spotrait.jpeg";
import ThumbFlashback80s from "../../assets/mockimages/thumbs/80sflashback.jpg";
import ThumbAerialView from "../../assets/mockimages/thumbs/aerialview.jpg";
import ThumbAnime from "../../assets/mockimages/thumbs/anime.png";
import ThumbCaricature from "../../assets/mockimages/thumbs/caricature.jpg";
import ThumbPhotobooth from "../../assets/mockimages/thumbs/photobooth.jpg";
import ThumbPinCollection from "../../assets/mockimages/thumbs/pincollection.jpeg";
import ThumbSketch from "../../assets/mockimages/thumbs/sketch.jpg";
import ThumbStickers from "../../assets/mockimages/thumbs/stickers.jpg";
import ThumbUnderwaterShot from "../../assets/mockimages/thumbs/underwatershoit.jpeg";
import ThumbY2KDigicam from "../../assets/mockimages/thumbs/y2kdigicamm.jpg";
import UnderwaterShot from "../../assets/mockimages/underwatershoit.jpeg";
import Y2KDigicam from "../../assets/mockimages/y2kdigicamm.jpg";

export const TrendingDataRoute = [
    {
        id: 1,
        name: "Aerial View",
        title: "Soar Above The World From New Heights",
        description: "drone view",
        image: AerialView,
        thumbImage: ThumbAerialView,
    },
    {
        id: 2,
        name: "Anime",
        title: "Vivid Characters Straight Out Of A Manga",
        description:
            "Vibrant anime-style illustration with soft cel shading. Vibrant anime-style illustration with soft cel shading. Vibrant anime-style illustration with soft cel shading. Vibrant anime-style illustration with soft cel shading. Vibrant anime-style illustration with soft cel shading. Vibrant anime-style illustration with soft cel shading. Vibrant anime-style illustration.",
        image: Anime,
        thumbImage: ThumbAnime,
    },
    {
        id: 3,
        name: "3D Avatar",
        title: "Bring Your Digital Self Into Three Dimensions",
        description: "Playful 3D avatar render with soft studio lighting.",
        image: Avatar3D,
        thumbImage: ThumbAvatar3D,
    },
    {
        id: 4,
        name: "Caricature",
        title: "Bigger Features And An Even Bigger Personality",
        description:
            "Exaggerated caricature portrait with bold linework and color.",
        image: Caricature,
        thumbImage: ThumbCaricature,
    },
    {
        id: 5,
        name: "Photo Booth",
        title: "Strike A Pose Inside The Classic Booth",
        description: "Vintage photo booth strip with warm flash tones.",
        image: Photobooth,
        thumbImage: ThumbPhotobooth,
    },
    {
        id: 6,
        name: "Pin Collection",
        title: "Tiny Enamel Treasures You Can Wear Anywhere",
        description: "Flat-lay of an enamel pin collection on denim.",
        image: PinCollection,
        thumbImage: ThumbPinCollection,
    },
    {
        id: 7,
        name: "70s Portrait",
        title: "Groovy Retro Vibes Straight From The Seventies",
        description: "Retro 70s film portrait with grain and warm hues.",
        image: Portrait70s,
        thumbImage: ThumbPortrait70s,
    },
    {
        id: 8,
        name: "80s Flashback",
        title: "Neon Nights And Synthwave Dreams Come Alive",
        description: "Neon-drenched 80s synthwave flashback scene.",
        image: Flashback80s,
        thumbImage: ThumbFlashback80s,
    },
    {
        id: 9,
        name: "Sketch",
        title: "Rough Lines That Bring Ideas To Life",
        description: "Pencil sketch study with expressive hatching.",
        image: Sketch,
        thumbImage: ThumbSketch,
    },
    {
        id: 10,
        name: "Stickers",
        title: "Peel Off A Burst Of Colorful Fun",
        description: "Colorful die-cut sticker pack arranged on a notebook.",
        image: Stickers,
        thumbImage: ThumbStickers,
    },
    {
        id: 11,
        name: "Underwater Shot",
        title: "Dive Deep Into A World Of Blue",
        description: "Underwater shot with caustic light and deep blues.",
        image: UnderwaterShot,
        thumbImage: ThumbUnderwaterShot,
    },
    {
        id: 12,
        name: "Y2K Digicam",
        title: "Turn Back Time With Grainy Digital Memories",
        description: "Y2K digicam snap with flash and a dated timestamp.",
        image: Y2KDigicam,
        thumbImage: ThumbY2KDigicam,
    },
];

export const ReverseTrendingDataRoute = [...TrendingDataRoute].reverse();

const importedImages = [
    ThumbAerialView,
    ThumbAnime,
    ThumbAvatar3D,
    ThumbCaricature,
    ThumbPhotobooth,
    ThumbPinCollection,
    ThumbPortrait70s,
    ThumbFlashback80s,
    ThumbSketch,
    ThumbStickers,
    ThumbUnderwaterShot,
    ThumbY2KDigicam,
];

const imageEntries = Array.from({ length: 9 }, (_, index) => ({
    id: index + 1,
    image: importedImages[index % importedImages.length],
}));

for (let index = imageEntries.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1));
    [imageEntries[index], imageEntries[swapIndex]] = [
        imageEntries[swapIndex],
        imageEntries[index],
    ];
}

export const ImageAssets = imageEntries;
