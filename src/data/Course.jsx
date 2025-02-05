import CoverImg from "../assets/images/blue-bg.jpg";
const eleganceInBeauty = {
  id: 1,
  title: 'Elegance in Beauty',
  description: 'A comprehensive course on refining beauty, style and grace,',
  image: CoverImg,
  modules: [
    {
      id: 1,
      title: 'The Foundations of Elegance',
      lessons: [
        {
          id: '1.1',
          title: 'Understanding Elegance & Timeless Beauty',
          content: 'What is elegance? The difference between fashionable & timeless style.'
        },
        {
          id: '1.2',
          title: 'The Psychology of Elegance',
          content: 'How elegance influences confidence and perception.'
        }
      ]
    },
    {
      id: 2,
      title: 'Fashion & Styling for Elegance',
      lessons: [
        {
          id: '2.1',
          title: 'Wardrobe Essentials for an Elegant Look',
          content: 'Classic Wardrobe Staples and the Power of Neutral Colors.'
        },
        {
          id: '2.2',
          title: 'Mastering the Art of Dressing Well',
          content: 'Understanding body types and flattering silhouettes.'
        }
      ]
    }
  ],
  source: "Tjay's Institue of Fashion"
};

const artInFashion = {
  id: 2,
  title: 'The Art in Fashion',
  description: 'A comprehensive course on refining beauty, style and grace,',
  image: CoverImg,
  modules: [
    {
      id: 1,
      title: 'The Foundations of Elegance',
      lessons: [
        {
          id: '1.1',
          title: 'Understanding Elegance & Timeless Beauty',
          content: 'What is elegance? The difference between fashionable & timeless style.'
        },
        {
          id: '1.2',
          title: 'The Psychology of Elegance',
          content: 'How elegance influences confidence and perception.'
        }
      ]
    },
    {
      id: 2,
      title: 'Fashion & Styling for Elegance',
      lessons: [
        {
          id: '2.1',
          title: 'Wardrobe Essentials for an Elegant Look',
          content: 'Classic Wardrobe Staples and the Power of Neutral Colors.'
        },
        {
          id: '2.2',
          title: 'Mastering the Art of Dressing Well',
          content: 'Understanding body types and flattering silhouettes.'
        }
      ]
    }
  ],
  source: "Tjay's Institue of Fashion"
};

const courses = { eleganceInBeauty, artInFashion };

export default courses;