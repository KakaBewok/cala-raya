export default interface Data {
  brideAndGroom: {
    groom: Person;
    bride: Person;
  };
  slug: string;
  audioUrl: string;
  weddingDate: string;
  thumbnailImageUrl: string;
  videoUrl: string;
  introduction: string;
  openingMessages: OpeningMessages;
  loveStory: LoveStoryItem[];
  gallery: string[];
  showMenu: ShowMenu;
  giftInfo: GiftInfo[];
  theme: string;
  location: Location;
}

interface Person {
  photo: string;
  nickname: string;
  fullName: string;
  father: string;
  mother: string;
}

interface OpeningMessages {
  image: string;
  content: string;
}

interface LoveStoryItem {
  imageUrl: string;
  title: string;
  description: string;
}

interface ShowMenu {
  breakingNews: boolean;
  brideAndGroom: boolean;
  loveStory: boolean;
  gallery: boolean;
  wish: boolean;
}

interface GiftInfo {
  providerName: string;
  accountNumber: string;
  accountHolder: string;
  address: string;
}

interface Location {
  mapUrl: string;
  address: string;
}
