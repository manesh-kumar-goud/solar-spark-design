import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Image, Video, X } from "lucide-react";

// Placeholder gallery items
const photos = [
  { id: 1, title: "Residential Installation", category: "residential" },
  { id: 2, title: "Commercial Project", category: "commercial" },
  { id: 3, title: "Rooftop Solar", category: "residential" },
  { id: 4, title: "Factory Installation", category: "commercial" },
  { id: 5, title: "Home Solar Panels", category: "residential" },
  { id: 6, title: "Industrial Setup", category: "commercial" },
];

const videos = [
  { id: 1, title: "Installation Process", thumbnail: "" },
  { id: 2, title: "Customer Testimonial", thumbnail: "" },
  { id: 3, title: "Company Overview", thumbnail: "" },
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  return (
    <Layout>
      {/* Hero */}
      <section className="relative overflow-hidden gradient-hero py-20">
        <div className="container relative mx-auto px-4 text-center">
          <h1 className="mb-4 font-heading text-4xl font-bold text-primary-foreground md:text-5xl">
            Our Gallery
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-primary-foreground/80">
            Explore our completed solar installations and projects.
          </p>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="photos" className="w-full">
            <div className="mb-8 flex justify-center">
              <TabsList>
                <TabsTrigger value="photos" className="gap-2">
                  <Image className="h-4 w-4" />
                  Photos
                </TabsTrigger>
                <TabsTrigger value="videos" className="gap-2">
                  <Video className="h-4 w-4" />
                  Videos
                </TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="photos">
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {photos.map((photo) => (
                  <div
                    key={photo.id}
                    onClick={() => setSelectedImage(photo.id)}
                    className="group cursor-pointer overflow-hidden rounded-2xl border border-border bg-muted aspect-[4/3] relative transition-all hover:shadow-solar-lg"
                  >
                    <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-primary/20 to-primary/5">
                      <Image className="h-12 w-12 text-primary/30" />
                    </div>
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-foreground/80 to-transparent p-4">
                      <p className="font-medium text-primary-foreground">
                        {photo.title}
                      </p>
                      <p className="text-sm text-primary-foreground/70 capitalize">
                        {photo.category}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="videos">
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {videos.map((video) => (
                  <div
                    key={video.id}
                    className="group cursor-pointer overflow-hidden rounded-2xl border border-border bg-muted aspect-video relative transition-all hover:shadow-solar-lg"
                  >
                    <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-primary/20 to-primary/5">
                      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/90 text-primary-foreground transition-transform group-hover:scale-110">
                        <Video className="h-7 w-7" />
                      </div>
                    </div>
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-foreground/80 to-transparent p-4">
                      <p className="font-medium text-primary-foreground">
                        {video.title}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/80 p-4 backdrop-blur-sm animate-fade-in"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-card text-foreground"
            onClick={() => setSelectedImage(null)}
          >
            <X className="h-5 w-5" />
          </button>
          <div className="max-h-[80vh] max-w-4xl overflow-hidden rounded-2xl bg-muted">
            <div className="flex aspect-video items-center justify-center">
              <Image className="h-20 w-20 text-primary/30" />
            </div>
          </div>
        </div>
      )}
    </Layout>
  );
};

export default Gallery;
