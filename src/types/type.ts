export interface BBDataType {
  id: number;
  username: string;
  title: string;
  content: string;
  createdAt: Date;
}

export interface Article {
  id: string;
  slug: number;
  createdAt: Date;
  published: boolean;
  authorId: string;
  content: string;
  title: string;
  tagIDs: string[];
  categoryIDs: string[];
}

// export interface Article {
//   id String @id @default(auto()) @map("_id") @db.ObjectId
//   slug Int @unique
//   createdAt DateTime @default(now())
//   published Boolean @default(false)
//   author User @relation(fields: [authorId], references: [id])
//   authorId String @db.ObjectId
//   content String
//   title String
//   tagIDs String[] @db.ObjectId
//   tags Tag[] @relation(fields: [tagIDs], references: [id])
//   categoryIDs String[] @db.ObjectId
//   categories Category[] @relation(fields: [categoryIDs], references: [id])
//   likes Like[]
// }
