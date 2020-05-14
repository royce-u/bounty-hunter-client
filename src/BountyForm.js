import React, { useState } from 'react';

const API_URL = 'https://bounty-api-royce.herokuapp.com/v1/bounties/'

const BountyForm = props => {
    let [name, setName] = useState('')
    let [client, setClient] = useState('')
    let [reward, setReward] = useState(10000)
    let [ship, setShip] = useState('')
    let [wantedFor, setWantedFor] = useState('')
    let [hunters, setHunters] = useState('')

    const submit = e => {
        e.preventDefault()
        console.log('submit!')
        fetch(API_URL, {
            method: 'POST',
            body: JSON.stringify({
                name,
                client,
                hunters: hunters.split(',').map(h => h.trim()),
                reward,
                ship,
                wantedFor
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(response => {
            //refresh the bounties
            props.refresh()
            //clear the form
            setClient('')
            setName('')
            setHunters('')
            setShip('')
            setReward(10000)
        })
    }

    

    return (
        <div className="bounty-form">
            <h3>Add New Bounty</h3>
            <form onSubmit={submit}>
                <div>
                    <label for="name">Name</label>
                    <input type="text"
                        value={name}
                        onChange={e => setName(e.target.value)}
                    />
                    </div>
                    <div>
                    <label for="wantedFor">Wanted For</label>
                    <input type="text"
                        value={wantedFor}
                        onChange={e => setWantedFor(e.target.value)}
                    />
                    </div>
                    <div>
                    <label for="client">Client</label>
                    <input type="text"
                        value={client}
                        onChange={e => setClient(e.target.value)}
                    />
                    </div>

                    <div>
                    <label for="ship">&nbsp;    Ship&nbsp;</label>
                    <input type="text"
                        value={ship}
                        onChange={e => setShip(e.target.value)}
                    />
                    </div>
                   

                    <label for="reward">reward</label>
                    <input type="text"
                        value={reward}
                        onChange={e => setReward(e.target.value)}
                    />
                    <label for="hunters">Hunters</label>
                    <input type="text"
                        value={hunters}
                        onChange={e => setHunters(e.target.value)}
                    />
                 <button type="submit">Make A Bounty</button>
            </form>
        </div>
    )
}

export default BountyForm;


