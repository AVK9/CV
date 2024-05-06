import {
  ModalW,
  Backdrop,
  CloseBtn,
  Name,
  PriceBox,
  Price,
  PhotoBox,
  IconWrapper,
  RatingBox,
  BoxItem,
  TextItem,
  TextItemLoc,
  DescriptionBox,
  Description,
  PrePhoto,
  TabBox,
  TabHead,
  TabName,
  FeaturesTab,
  InfoBox,
} from './Modal.styled';
import { IconButton } from '../../components';

const ModalPortal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <Backdrop>
      <ModalW>
        <CloseBtn onClick={onClose}>
          <IconButton size="32px" icon="close" />
        </CloseBtn>
        <div className="modal-content">{children}</div>
      </ModalW>
    </Backdrop>
  );
};

export default ModalPortal;
