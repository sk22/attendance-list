# Attendance List

## Technologies

- PWA
- React
- Firebase

## Concept

### Views

#### Lists
`/` List of Attendance Lists

- Toolbar (title: "Attendance Lists", plus button)
- List items
  - three dot menu on the right -> rename, delete
  - click opens [List](#list) view

#### People
`/people` Register of all People, click on item opens Person view

- Toolbar (title: "People")
  - Plus button: Opens Person view without person reference
- List items
  - Click opens Person view

#### Person
`/people/:id` Edit Person's details

`/people/new` Create new Person

Changes are saved to view state, applied to database when saved

- Toolbar (title: "Edit Person")

#### Groups
`/groups` List of Groups

#### List
`/list/:id` Single Attendance List

- Toolbar (title: name of attendance list)
- List items
  - Checkboxes toggle attendance
    - `true`: attends, checked
    - `false`: does not attend, 'indeterminate'
    - `null`: unknown, not checked
  - Three dot menu
    - Go to [Person](#person) view

### Database

```
attendance-list
├─ people
|  └─ 1
|  |  ├─ name: "John Doe"
|  |  └─ email: "john.doe@example.com"
|  └─ 2
|     ├─ name: "Jane Doe"
|     └─ email: "jane.doe@example.com"
├─ groups
|  └─ 1
|     ├─ name: "Some Club"
|     └─ members: [1, 2]
└─ lists
   └─ 1
    ├─ name: "Club Meeting"
    ├─ people: [1, 2]
    └─ attendance
       ├─ 1: true
       └─ 2: "maybe"
```

#### Person

```javascript
{
  name: string,
  email: ?string,
  address: ?string,
  notes: ?string
}
```

#### Attendance

```javascript
true | false | null
```
