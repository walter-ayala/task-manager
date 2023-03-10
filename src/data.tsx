export const dataTasks = [
  {
    name: 'BACKLOG',
    values: [
      {
        id: 'cea74568-1db6-49aa-94b8-46967ae8e287',
        assignee: {
          avatar: 'https://avatars.dicebear.com/api/initials/gs.svg',
          fullName: 'Grace Stone'
        },
        pointEstimate: 'EIGHT',
        createdAt: '2023-03-06T22:09:24.374Z',
        dueDate: '2023-03-11T11:25:56.082Z',
        name: 'Ticket1',
        position: 1,
        status: 'BACKLOG',
        tags: ['ANDROID', 'REACT', 'IOS', 'REACT', 'ANDROID', 'REACT']
      }, {
        id: '9c2602ab-a943-427d-acc2-86a782a9f309',
        assignee: {
          avatar: 'https://avatars.dicebear.com/api/initials/jd.svg',
          fullName: 'Jhon Doe'
        },
        pointEstimate: 'ONE',
        createdAt: '2023-03-06T22:09:24.367Z',
        dueDate: '2023-03-08T11:25:56.082Z',
        name: 'Ticket3',
        position: 2,
        status: 'BACKLOG',
        tags: ['ANDROID']
      },
      {
        id: '7405afdc-8ce0-48e7-bce3-9573fea10d90',
        assignee: {
          avatar: 'https://avatars.dicebear.com/api/initials/jd.svg',
          fullName: 'Jhon Doe'
        },
        pointEstimate: 'EIGHT',
        createdAt: '2023-03-06T22:09:24.374Z',
        dueDate: '2023-03-18T11:25:56.082Z',
        name: 'Ticket5',
        position: 3,
        status: 'BACKLOG',
        tags: ['RAILS', 'NODE_JS']
      },
      {
        id: 'bc761132-bf98-4255-9623-d1c339cf122b',
        assignee: {
          avatar: 'https://avatars.dicebear.com/api/initials/rb.svg',
          fullName: 'Romeo Barnes'
        },
        pointEstimate: 'EIGHT',
        createdAt: '2023-03-06T22:09:24.375Z',
        dueDate: '2023-03-08T11:25:56.082Z',
        name: 'Ticket8',
        position: 4,
        status: 'BACKLOG',
        tags: ['RAILS']
      }
    ]
  }, {
    name: 'TODO',
    values: [
      {
        id: '51b7965f-dcf5-4fdc-bce6-20b899cdfe5d',
        assignee: {
          avatar: 'https://avatars.dicebear.com/api/initials/rb.svg',
          fullName: 'Romeo Barnes'
        },
        pointEstimate: 'TWO',
        createdAt: '2023-03-06T22:09:24.375Z',
        dueDate: '2023-03-09T11:25:56.082Z',
        name: 'Ticket7',
        position: 1,
        status: 'TODO',
        tags: ['REACT', 'NODE_JS']
      }
    ]
  },
  {
    name: 'IN_PROGRESS',
    values: [
      {
        id: '1dede27c-8d9f-47d5-9b50-e8c9c1d9560f',
        assignee: {
          avatar: 'https://avatars.dicebear.com/api/initials/jd.svg',
          fullName: 'Jhon Doe'
        },
        pointEstimate: 'ZERO',
        createdAt: '2023-03-06T22:09:24.367Z',
        dueDate: '2023-03-14T11:25:56.082Z',
        name: 'Ticket4',
        position: 1,
        status: 'IN_PROGRESS',
        tags: ['REACT']
      }, {
        id: '19f98346-7246-4c49-84ef-010085597c16',
        assignee: {
          avatar: 'https://avatars.dicebear.com/api/initials/rb.svg',
          fullName: 'Romeo Barnes'
        },
        pointEstimate: 'TWO',
        createdAt: '2023-03-06T22:09:24.374Z',
        dueDate: '2023-03-10T11:25:56.082Z',
        name: 'Ticket6',
        position: 2,
        status: 'IN_PROGRESS',
        tags: ['ANDROID', 'IOS']
      }
    ]
  },
  {
    name: 'CANCELLED',
    values: [
      {
        id: '14870013-611f-4c62-9a4b-83f71b14ae93',
        assignee: {
          avatar: 'https://avatars.dicebear.com/api/initials/gs.svg',
          fullName: 'Grace Stone'
        },
        pointEstimate: 'FOUR',
        createdAt: '2023-03-06T22:09:24.367Z',
        dueDate: '2023-03-12T11:25:56.082Z',
        name: 'Ticket2',
        position: 1,
        status: 'CANCELLED',
        tags: ['ANDROID', 'RAILS']
      }
    ]
  }
]
