import Head from "next/head"
import styles from "@/styles/Home.module.css"
import { useEffect, useState } from "react"
import type { Dog } from "@/utils/types"
import AddDogForm from "@/components/AddDog/AddDogForm"
import "superstylin"
export default function Home() {
    const [dogs, setDogs] = useState<Dog[]>([])
    useEffect(() => {
        fetch("/api/dog")
            .then((res) => res.json())
            .then((res) => {
                res?.dogs ? setDogs(res.dogs) : setDogs([])
            })
    }, [])
    return (
        <>
            <Head>
                <title>Create Next App</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className={styles.main}>
                <h1>Learn TypeScript</h1>
                <AddDogForm setDogs={setDogs} />
                {dogs && (
                    <ul className={styles.grid}>
                        {dogs.map((dog, i) => (
                            <li key={i}>
                                <h2>{dog.name}</h2>
                                <p>nicknames: {dog.nicknames.join(", ")}</p>
                                <p>age: {dog.age}</p>
                                <p>size: {dog.size}</p>
                                <p>
                                    Is this dog fluffy? {dog.isFluffy ? "yes" : "Rough as cement"}
                                </p>
                            </li>
                        ))}
                    </ul>
                )}
            </main>
        </>
    )
}
