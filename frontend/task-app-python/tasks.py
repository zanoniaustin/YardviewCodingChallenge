import flet as ft
import urllib.request
from dataclasses import dataclass
from datetime import date
import json

@dataclass
class Task:
    id: str
    title: str
    description: str
    status: str
    created_at: str

def main(page: ft.Page):
    page.title = "Task Management Application"
    filtered_data = ft.TextField(label="Enter task status", hint_text="e.g. todo, in_progress, done", width=200)

    table = ft.DataTable(
        columns=[
            ft.DataColumn(ft.Text("Title")),
            ft.DataColumn(ft.Text("Description")),
            ft.DataColumn(ft.Text("Status")),
            ft.DataColumn(ft.Text("Created At")),
        ],
        rows=[
        ]
    )

    def addTasks(e):
        url = 'http://localhost:8080/tasks' + '?status=' + filtered_data.value
        with urllib.request.urlopen(url) as response:
            html = response.read()
            data_list = json.loads(html.decode('utf-8'))
            print(data_list[1].values())
            print(len(data_list))
        
        for task in data_list:
            new_row = ft.DataRow(
                cells=[ft.DataCell(ft.Text(item)) for item in list(task.values())[1:]]
            )
            table.rows.append(new_row)
            table.update()
        page.update()

    

    page.add(
        filtered_data,
        ft.ElevatedButton("Get Tasks", on_click=addTasks),
        table
    )

ft.app(target=main)
