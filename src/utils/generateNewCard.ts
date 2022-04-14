import { CreateCardForm, ResponseVideoItemModel } from "@app/shared";

export const generateNewCard = (dataFromForm: CreateCardForm): ResponseVideoItemModel => ({
  etag: "asdasd",
  id: "asdad",
  kind: "asdasd",
  snippet: {
    description: dataFromForm.description,
    publishedAt: dataFromForm.date,
    title: dataFromForm.title,
    thumbnails: {
      medium: {
        height: 180,
        width: 320,
        url: dataFromForm.imgLink,
      },
      standard: {
        height: 480,
        width: 640,
        url: dataFromForm.imgLink,
      },
    },
  },
  statistics: {
    commentCount: `${Math.floor(Math.random() * 1000)}`,
    dislikeCount: `${Math.floor(Math.random() * 1000)}`,
    favoriteCount: `${Math.floor(Math.random() * 1000)}`,
    likeCount: `${Math.floor(Math.random() * 1000)}`,
    viewCount: `${Math.floor(Math.random() * 100000)}`,
  },
});
