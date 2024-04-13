# Social Media App

This project is a social media application built using React.js for the frontend and Laravel for the backend.

## Features

- User authentication: Users can sign up, log in, and log out securely.
- Create and edit profiles: Users can create their profiles, update profile information, and upload profile pictures.
- Post creation and interaction: Users can create posts, like and comment on posts, and delete their own posts.
- Follow system: Users can follow/unfollow other users to see their posts in their feed.
- Real-time updates: Real-time updates for notifications, new posts, and new followers.

## Technologies Used

- **Frontend:**
  - React.js
  - React Router
  - Axios
  - Material-UI (optional for UI components)

- **Backend:**
  - Laravel
  - Laravel Passport for authentication
  - Eloquent ORM for database interactions
  - MySQL or PostgreSQL (choose one) for the database
  
## Installation

1. Clone the repository: `git clone https://github.com/your-username/social-media-app.git`
2. Navigate to the project directory: `cd social-media-app`
3. Install dependencies:
   - Frontend: `cd frontend && npm install`
   - Backend: `cd backend && composer install`
4. Set up your environment variables:
   - Frontend: Copy `.env.example` to `.env` and configure your environment variables.
   - Backend: Copy `.env.example` to `.env` and configure your environment variables.
5. Run migrations and seed the database: 
   - `php artisan migrate`
   - `php artisan db:seed`
6. Start the development servers:
   - Frontend: `cd frontend && npm start`
   - Backend: `php artisan serve`

## Contributing

Contributions are welcome! Please follow the [Contribution Guidelines](CONTRIBUTING.md).

## License

This project is licensed under the [MIT License](LICENSE).

