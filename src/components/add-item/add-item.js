import React, { Component } from 'react'

class AddItem extends Component {

    onSubmit = (e) => {
        e.preventDefault()
        console.log(`I submit`)
    }

    render() {
        return (
            <div>
                <h3>Add an item!</h3>
                <form onSubmit={this.onSubmit}>
                    <div>
                        <label>Name: </label>
                        <input />
                    </div>
                    <div>
                        <label>Reason: </label>
                        <input />
                    </div>
                    <div>
                        <input type="submit" />
                    </div>
                </form>
            </div >
        )
    }
}

export default AddItem