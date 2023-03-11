export interface TabSidebar {
  selected: boolean
}

export interface Tags {
  first: boolean
  name: string
}

export interface WeightText {
  normalWeight?: boolean
}

export interface TimerStyles {
  bgcolor: string
  textcolor: string
}

export enum TaskTag {
  ANDROID = 'ANDROID',
  IOS = 'IOS',
  NODE_JS = 'NODE_JS',
  RAILS = 'RAILS',
  REACT = 'REACT',
}

export enum Status {
  BACKLOG = 'BACKLOG',
  CANCELLED = 'CANCELLED',
  DONE = 'DONE',
  IN_PROGRESS = 'IN_PROGRESS',
  TODO = 'TODO',
}

export enum PointEstimate {
  EIGHT = 'EIGHT',
  FOUR = 'FOUR',
  ONE = 'ONE',
  TWO = 'TWO',
  ZERO = 'ZERO',
}

enum UserType {
  ADMIN = 'ADMIN',
  CANDIDATE = 'CANDIDATE',
}

export interface User {
  avatar: string
  createdAt?: string
  email?: string
  fullName: string
  id?: string
  type?: UserType
  updatedAt?: DateTime
}

export interface Task {
  assignee: User
  createdAt: string
  creator?: User
  dueDate: string
  id: string
  name: string
  pointEstimate: string
  position: number
  status: string
  tags: string[]
}

export interface TaskList {
  title: string
  values: Task[]
}
