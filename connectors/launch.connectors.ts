import { connectToMongodb } from "./";

export async function launchConnectors(): Promise<void> {
  await connectToMongodb();
}
