
export type Data = {
  id: number;
  username: string;
  email: string;
  description: string;
  Logo: {
    id: number;
    ulogoid: number;
    url: string;
    filename: string;
    originalname: string;
    createdAt: string;
    updatedAt: string;
  };
  Banner: {
    id: number;
    uBannerid: number;
    url: string;
    filename: string;
    originalname: string;
    createdAt: string;
    updatedAt: string;
  };
  Photos: [String | Number]

}
