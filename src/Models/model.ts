export interface video {
    title: string;
    imgUrl: string;
    imageAlt: string;
  }

  export interface VideoStatus {
    receive: boolean,
    decrytp: boolean,
    AbnmlDetction: boolean
  }


  export interface VideoInfoProps {
   
      url:string,
      Camera: string;
      Date: string;
      Time: string;
      Duration: string;
      Risk: string;

  }


  export const playList: VideoInfoProps[] = [
    {
    
        url: "public/Programmable Hardware Overview.mp4",
        Camera: "Camera 1",
        Date: "2023-08-26",
        Time: "12:00:00",
        Duration: "00:05:00",
        Risk: "Low",
   
    },
    {
     
        url: "/video2.mp4",
        Camera: "Camera 2",
        Date: "2023-08-27",
        Time: "15:30:00",
        Duration: "00:03:45",
        Risk: "Medium",
   
    },
    {
   
        url: "/video3.mp4",
        Camera: "Camera 3",
        Date: "2023-08-28",
        Time: "09:45:00",
        Duration: "00:07:20",
        Risk: "High",
  
    },
    {
     
        url: "/video4.mp4",
        Camera: "Camera 1",
        Date: "2023-08-29",
        Time: "18:15:00",
        Duration: "00:02:30",
        Risk: "Low",
   
    },
    {
  
        url: "/video5.mp4",
        Camera: "Camera 4",
        Date: "2023-08-30",
        Time: "10:30:00",
        Duration: "00:06:15",
        Risk: "Medium",
   
    },
    {
   
        url: "/video6.mp4",
        Camera: "Camera 2",
        Date: "2023-08-31",
        Time: "14:20:00",
        Duration: "00:04:50",
        Risk: "Low",

    },
    {
   
        url: "/video7.mp4",
        Camera: "Camera 5",
        Date: "2023-09-01",
        Time: "07:40:00",
        Duration: "00:03:10",
        Risk: "High",

    },
    {

        url: "/video8.mp4",
        Camera: "Camera 3",
        Date: "2023-09-02",
        Time: "16:05:00",
        Duration: "00:08:00",
        Risk: "Medium",
   
    },
    {
  
        url: "/video9.mp4",
        Camera: "Camera 4",
        Date: "2023-09-03",
        Time: "11:10:00",
        Duration: "00:05:45",
        Risk: "Low",
   
    },
    {
   
        url: "/video10.mp4",
        Camera: "Camera 5",
        Date: "2023-09-04",
        Time: "13:55:00",
        Duration: "00:04:30",
        Risk: "High",

    },
  ];
  