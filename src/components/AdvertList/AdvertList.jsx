import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getAdvertsThunk } from '../../store/adverts/advertsThunk';
import {
  selectLoading,
  selectError,
  // selectVisibleAdverts,
  // selectVisibleVehicleType,
  selectVisibleVehicleEquipment,
} from '../../store/adverts/advertsSelector ';
import { AdvertListItem } from '../AdvertListItem/AdvertListItem';
import { List } from './AdvertList.styled';
import { Loader } from '../Loader/Loader';
import { Flex, Button } from '../common/Flex';

export const AdvertList = () => {
  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(getAdvertsThunk());
  }, [dispatch]);
  const [page, setPage] = useState(4);

  // const adverts = useSelector(selectStateAdverts);
  // const adverts = useSelector(selectVisibleAdverts);
  // const adverts = useSelector(selectVisibleVehicleType);
  const adverts = useSelector(selectVisibleVehicleEquipment);

  const totalAdverts = adverts.length;
  const advertsPageList = adverts.slice(0, page);
  const currentLengthPage = advertsPageList.length;

  const clickLoadMore = () => {
    setPage(page + 4);
  };

  return (
    <>
      {loading && <Loader />}
      {/* {loading && !error && <p>Loading pleasure wait</p>} */}
      {error && <p>Error: {error}</p>}
      {adverts.length ? (
        <List>
          {advertsPageList.map((data) => (
            <AdvertListItem data={data} key={data._id} />
          ))}
          {totalAdverts >= currentLengthPage &&
            totalAdverts !== currentLengthPage && (
              // <LoadMoreBtn onClick={clickLoadMore}>Load more</LoadMoreBtn>
              <Flex>
                <Button className="load" onClick={clickLoadMore}>
                  Load more
                </Button>
              </Flex>
            )}
        </List>
      ) : (
        <Loader />
        // <p>No contacts to filter</p>
      )}
    </>
  );
};