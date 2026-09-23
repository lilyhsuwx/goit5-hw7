import {List, Item, Btn, Title } from "./TaskList.styled"
import { Component } from "react";
import tasks from "../tasks.json";

class TaskList extends Component {
    state = {
        listTask: tasks,
    }

    handleBtnDelete = (id) => {
        this.setState((prev) => ({
            listTask: prev.listTask.filter((listTask) => listTask.id !== id)
        }))
    }

    render() {
        return(
            <List>{this.state.listTask.map((listTask) => {
                return (
                    <Item key={listTask.id}>
                        <Title>{listTask.text}</Title>

                        <Btn type="button" onClick={() => this.handleBtnDelete(listTask.id)}>delete</Btn>
                    </Item>
                )
            })}
            </List>
        )
    }
}

export default TaskList