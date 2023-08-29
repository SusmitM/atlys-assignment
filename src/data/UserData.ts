 interface UserDataType {
    id: string;
    profilePic: string;
    name: string;
    timeOfPost: string;
    comments: string;
    emoji: string;
    postText: string;
    isEdited: boolean;
  }

export const UserData: UserDataType[]= [{
    id: "1",
    profilePic: "https://res.cloudinary.com/djxqg0lar/image/upload/v1693298503/Buzz-socialmedia/rmc8s61awpeiswrlcead.png",
    name: "Theresa Webb",
    timeOfPost: "5 mins ago",
    comments: "24",
    emoji: "👋",
    postText: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    isEdited: false
  },
  {
    id: "2",
    profilePic: "https://res.cloudinary.com/djxqg0lar/image/upload/v1693298545/Buzz-socialmedia/do0lxhidbkcw9vjjzoci.png",
    name: "Marvin McKinney",
    timeOfPost: "8 mins ago",
    comments: "32",
    emoji: "😞",
    postText: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    isEdited: true
  }
  ]