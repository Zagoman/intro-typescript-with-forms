import { Dispatch, FormEvent, SetStateAction, useState } from "react"
import type { Dog } from "@/utils/types"
interface AddDogFormProps {
    setDogs: Dispatch<SetStateAction<Dog[]>>
}
const AddDogForm: React.FC<AddDogFormProps> = (props) => {
    const { setDogs } = props
    const [name, setName] = useState<Dog["name"]>("")
    const [nicknames, setNicknames] = useState<Dog["nicknames"]>([""])
    const [isFluffy, setIsFluffy] = useState<Dog["isFluffy"]>(false)
    const [size, setSize] = useState<Dog["size"] | undefined>(undefined)
    const [age, setAge] = useState<number | undefined>(undefined)
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setDogs((old) => [
            {
                name,
                nicknames,
                isFluffy,
                age,
                size,
            } as Dog,
            ...old,
        ])
    }
    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">
                What is this doggo&apos;s name?
                <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    type="text"
                    id="name"
                    name="name"
                    required
                />
            </label>
            <label htmlFor="nicknames">
                What are its nicknames? (Separate it by commas)
                <input
                    value={nicknames}
                    onChange={(e) => setNicknames(e.target.value.split(","))}
                    type="text"
                    id="nicknames"
                    name="nicknames"
                    required
                />
            </label>
            <label htmlFor="age">
                What is the its age?
                <input
                    value={age}
                    onChange={(e) => setAge(Number(e.target.value))}
                    type="number"
                    id="age"
                    name="age"
                    required
                />
            </label>
            <label htmlFor="nicknames">
                Is this dog fluffy?
                <input
                    checked={isFluffy}
                    onChange={(e) => setIsFluffy(e.target.checked)}
                    type="checkbox"
                    id="isFluffy"
                    name="isFluffy"
                />
            </label>
            <select onChange={(e) => setSize(e.target.value as Dog["size"])} required>
                <option value="XSMALL">x-small</option>
                <option value="SMALL">small</option>
                <option value="MEDIUM">medium</option>
                <option value="LARGE">large</option>
                <option value="XLARGE">x-large</option>
            </select>
            <input type="submit" value="Submit"></input>
        </form>
    )
}
export default AddDogForm
