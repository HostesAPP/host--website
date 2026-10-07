export type Testimony = {
  id: string;
  quote: string;
  name: string;
  role: string;
  image?: string;
};

export const testimonies: Testimony[] = [
  {
    id: "komolafe",
    quote:
      "Hosté made finding the right event staff feel simple. The professionalism and energy they brought to the event stood out!",
    name: "Komolafe O",
    role: "Managing Director",
    image: "/images/mide.jpg",
  },
  {
    id: "chinaza",
    quote:
      "Working with Hosté has been smooth from start to finish. Communication was clear, the team was reliable, and the experience felt well organised.",
    name: "Chinaza N",
    role: "Club Manager",
    image: "/images/soma.jpg",
  },
  {
    id: "veronica",
    quote:
      "Working with Hosté has been smooth from start to finish. Communication was clear, the team was reliable, and the experience felt well organised.",
    name: "Veronica W",
    role: "Manager",
    image: "/images/vanessa.jpg",
  },
];
