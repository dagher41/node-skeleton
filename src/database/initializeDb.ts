import { dataSource } from "../../data-source"

export default async () => {
    try {
        await dataSource.initialize();
        console.log("Data Source has been initialized!");
    } catch (err: any) {
        console.error("Error during Data Source initialization", err);
    }
}
