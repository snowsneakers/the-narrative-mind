import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const CarouselSection = () => {
  return (
    <section className="space-y-5 rounded-md py-5 bento">
      <div>
        <Carousel className="w-full">
          <CarouselContent>
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem key={index} className="xxs:basis-1/2 med:basis-1/3">
                <div className="p-1">
                  <img
                    src={`/assets/carousel/carousel-${index + 1}.jpeg`}
                    alt={index.toString()}
                    className="rounded-md w-full"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
};

export default CarouselSection;
