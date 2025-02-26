import { useState } from "react";

function CreateBet() {
    const [betTitle, setBetTitle] = useState("");
    const [description, setDescription] = useState("");
    const [stake, setStake] = useState("");
    const [dueDate, setDueDate] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({
            betTitle,
            description,
            stake,
            dueDate
        });
        // TODO: Send data to backend
        alert("Bet created successfully!");
        setBetTitle("");
        setDescription("");
        setStake("");
        setDueDate("");
    };

    return (
        <div className="p-4 max-w-lg mx-auto">
            <h1 className="text-2xl font-bold mb-4">Create a Bet</h1>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label className="block font-medium">Bet Title</label>
                    <input 
                        type="text"
                        value={betTitle}
                        onChange={(e) => setBetTitle(e.target.value)}
                        className="w-full p-2 border rounded"
                        required
                    />
                </div>

                <div>
                    <label className="block font-medium">Description</label>
                    <textarea 
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        className="w-full p-2 border rounded"
                        required
                    />
                </div>

                <div>
                    <label className="block font-medium">Stake (Points, Money, Bragging Rights)</label>
                    <input 
                        type="text"
                        value={stake}
                        onChange={(e) => setStake(e.target.value)}
                        className="w-full p-2 border rounded"
                        required
                    />
                </div>

                <div>
                    <label className="block font-medium">Due Date</label>
                    <input 
                        type="date"
                        value={dueDate}
                        onChange={(e) => setDueDate(e.target.value)}
                        className="w-full p-2 border rounded"
                        required
                    />
                </div>

                <button 
                    type="submit"
                    className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
                >
                    Create Bet
                </button>
            </form>
        </div>
    );
}

export default CreateBet;
