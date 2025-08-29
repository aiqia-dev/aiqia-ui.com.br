import { StoryFn } from "@storybook/react-vite";
import { Card, CardContent } from "..";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./carousel.component";

export default {
  title: "Components/Carousel",
  component: Carousel,
  tags: ["autodocs"],
};

export const Default: StoryFn = (args) => (
  <Carousel
    opts={{
      align: "start",
    }}
    {...args}
    className="w-full max-w-sm mx-auto"
  >
    <CarouselContent>
      {Array.from({ length: 5 }).map((_, index) => (
        <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
          <div className="p-1">
            <Card>
              <CardContent className="flex aspect-square items-center justify-center p-6">
                <span className="text-3xl font-semibold">{index + 1}</span>
              </CardContent>
            </Card>
          </div>
        </CarouselItem>
      ))}
    </CarouselContent>
    <CarouselPrevious />
    <CarouselNext />
  </Carousel>
);
