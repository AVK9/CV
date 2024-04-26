import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import {
  getAdvertsPageThunk,
  getAdvertsThunk,
} from '../../store/adverts/advertsThunk';
import {
  selectLoading,
  selectError,
  // selectVisibleAdverts,
  // selectVisibleVehicleType,
  selectVisibleVehicleEquipment,
  selectPageAnd,
} from '../../store/adverts/advertsSelector ';
import { AdvertListItem } from '../AdvertListItem/AdvertListItem';
import { List } from './AdvertList.styled';
import { Loader } from '../Loader/Loader';
import { Flex, Button } from '../../components';

export const AdvertList = () => {
  const [page, setPage] = useState(1);

  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(getAdvertsPageThunk(page));
  }, [dispatch, page]);

  // const adverts = useSelector(selectStateAdverts);
  // const adverts = useSelector(selectVisibleAdverts);
  // const adverts = useSelector(selectVisibleVehicleType);
  const adverts = useSelector(selectVisibleVehicleEquipment);
  const pageAnd = useSelector(selectPageAnd);
  if (pageAnd) {
    toast.warn('Sorry, there are no more advertisements');
  }

  // const totalAdverts = adverts.length;
  // const advertsPageList = adverts.slice(0, page);
  // const currentLengthPage = advertsPageList.length;

  const clickLoadMore = () => {
    setPage(page + 1);
  };
  console.log(page);
  return (
    <>
      {loading && <Loader />}
      {/* {loading && !error && <p>Loading pleasure wait</p>} */}
      {error && <p>Error: {error}</p>}
      {adverts && adverts.length > 0 && (
        <List>
          {adverts.map((data) => (
            <AdvertListItem data={data} key={data._id} />
          ))}
        </List>
      )}
      {/* <Loader />
      <p>No contacts to filter</p> */}
      {!pageAnd && adverts.length % 2 === 0 && (
        <Flex>
          <Button
            // className="load"
            loadmore
            onClick={clickLoadMore}
          >
            Load more
          </Button>
        </Flex>
      )}
    </>
  );
};
