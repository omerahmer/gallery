import Link from "next/link";

const mockUrls = [
  "https://utfs.io/f/843eb920-5403-42c4-bb74-bec83210aa5a-wptya0.png",
  "https://utfs.io/f/1f5c56fc-ba6a-4482-a1c8-9f78283864eb-7araqo.jpeg",
  "https://utfs.io/f/45494e4e-1596-4ff2-9fc9-7d97be679c83-6b3dll.jpg.large.jpg",
  "https://utfs.io/f/c28dff3f-128d-40c2-8112-8fdfa33decb2-vpmv7i.webp",
  "https://utfs.io/f/64439f7e-5056-4f6b-8ff6-12a609b58688-8b027m.jpg",
  "https://utfs.io/f/dc8b0501-ba9d-4afa-90a3-11d16d31eaa2-8rsw86.avif",
];

const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url,
}));

export default function HomePage() {
  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {mockImages.map((image) => (
          <div key={image.id} className="w-48">
            <img src={image.url} />
          </div>
        ))}
      </div>
    </main>
  );
}
