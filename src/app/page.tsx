const mockUrls = [
  "https://utfs.io/f/8bc800cf-66bd-458e-b417-051da4ab79b9-nkmeq6.jpg",
  "https://utfs.io/f/d163e980-9574-4d1c-b66b-e350f9d3f52c-9y0d5m.jpg",
  "https://utfs.io/f/7c3fc4e2-965d-4ebb-b814-f15c7f67006c-f2h2aw.jpg",
  "https://utfs.io/f/064bd7cc-fc20-4ecd-bc0a-6d380324f54d-3nwn29.jpg",
];

const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url,
}));

export default function HomePage() {
  return (
    <main>
      <div className="flex flex-wrap gap-4">
        {[...mockImages, ...mockImages, ...mockImages].map((image) => (
          <div className="w-48" key={image.id}>
            <img src={image.url} alt="mockImages" />
          </div>
        ))}
      </div>
    </main>
  );
}
