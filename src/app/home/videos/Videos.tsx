import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Video } from "@/components/Video/Video";
import videos from "@/app/home/data";

export const Videos = () => {
  return (
    <div className="flex justify-center flex-col gap-4 lg:gap-8 lg:flex-row lg:justify-start">
      {videos.map((video) => (
        <Card key={video.id} className="w-full">
          <CardHeader>
            <CardTitle>{video.title}</CardTitle>
            <CardDescription>{video.description}</CardDescription>
          </CardHeader>
          <CardContent>
            <Video
              src={video.src}
              title={video.title}
              width="300"
              height="200"
              className="w-full h-auto"
              style={{ aspectRatio: "300/200", objectFit: "cover" }}
            />
          </CardContent>
        </Card>
      ))}
    </div>
  )
}