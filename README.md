# verbera-api

A modern and intuitive forum application designed for vibrant community discussions.

## About

Verbera provides a platform for users to engage in conversations, share ideas, and connect over common interests. The name draws inspiration from the Latin verb "verberare," meaning to discuss or debate.

This project aims to build an application focusing on **Domain-Driven Design (DDD)** principles alongside **Clean Code** best practices. The architecture has been carefully planned to ensure clear separation of concerns and a maintainable, expressive codebase.

The implementation covers fundamental DDD concepts, including:

- Rich **Entities** with well-defined identities

- **Use Cases** that encapsulate application logic

- Abstract **Repositories** for data access

- **Factories** for complex object creation

- **Value Objects** to represent concepts without identity

- Strategically modeled **Domains** and **Subdomains**

- **Aggregates/Watched-Lists** to handle attachments

- **Functional Error Handling** for elegant error management

- Comprehensive **Unit Tests** to ensure quality

A fundamental premise is **decoupling from specific frameworks**, demonstrating that it's possible to develop robust solutions by focusing first on the business domain and architecture. This allows the same codebase to be adapted to different technologies without major refactoring.

The project includes a simple **Event Handler system** that enables asynchronous communication between different subdomains, facilitating integration while maintaining loose coupling between components.

As an evolutionary next step, the implementation of the **NestJS framework** is planned to provide the necessary infrastructure, such as REST APIs, dependency injection, and external integrations, while always preserving the already established DDD concepts in the domain layer.

## Key Features

*   Create, Update and Delete Questions;
*   Answer questions;
*   Add comments to answers;
*   Filter recent questions;
*   Filter a question by slug;
*   Ability to add attachments to both questions and answers;
*   List answers associated with a question;
*   Select an answer as the best in the topic;
*   Notifies the user when they receive new answers to the question or their answer receives the title of best answer in the topic;

## Getting Started

These instructions will get you a copy of the project up and running test enviroment local machine for development and testing purposes.

### Prerequisites

What things you need to install to run the app:

*   Node.js
*   npm

### Installation

1.  Clone the repository:
    ```bash
    git clone https://github.com/DevAnseSenior/verbera-api.git
    ```
2.  Navigate to the project directory:
    ```bash
    cd verbera
    ```
3.  Install the dependencies:
    ```bash
    npm install
    ```

4.  Run unit tests:
    ```bash
    npm run test # OR
    npm run test:watch # Run on watch mode
    ```

## Tech Stack

*   **TypeScript**;
*   **Node.js**;
*   **Dayjs**;
*   **vitest**;
*   **faker-js**;
*   **eslint**;

## License

This project is licensed under the MIT [License](./LICENSE).