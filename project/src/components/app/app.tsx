import MainPage from '../../pages/main-page/main-page';

type AppProps = {
  genres: string;
  filmDates: string;

}
function App({genres, filmDates}: AppProps): JSX.Element {
  return (
    <MainPage genres={genres} filmDates={filmDates} />
  );
}

export default App;
