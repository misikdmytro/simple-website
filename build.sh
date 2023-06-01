cd frontend
npm run build
cd ..
mkdir -p ./backend/public
cp -R ./frontend/dist/* ./backend/public
