import { IoIosContact } from 'react-icons/io';
import { MdPhoneInTalk } from 'react-icons/md';

import { ImCross } from "react-icons/im";
import { GoPencil } from "react-icons/go";

import styles from './Contact.module.css';

import { useDispatch } from 'react-redux';
import { deleteContact, updateContact } from '../../redux/contacts/operations';
import EditContactModal from '../EditContactModal/EditContactModal';
import DeleteContactModal from '../DeleteContactModal/DeleteContactModal';
import { useEffect, useRef, useState } from 'react';

const Contact = ({ contact }) => {
	const bodyRef = useRef(document.body);
	const dispatch = useDispatch();

	const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
	const [isEditModalOpen, setIsEditModalOpen] = useState(false);

	useEffect(() => {
		const body = bodyRef.current;
		isEditModalOpen || isDeleteModalOpen
			? body.classList.add('disable-scroll')
			: body.classList.remove('disable-scroll');

		return () => {
			body.classList.remove('disable-scroll');
		};
	}, [isEditModalOpen, isDeleteModalOpen]);

	const handleDelete = () => {
		handleCloseDeleteModal();
		dispatch(deleteContact(contact.id));
	};

	const handleUpdateContact = (modifiedContact) => {
		handleCloseEditModal();
		dispatch(updateContact(modifiedContact));
	};

	const handleOpenEditNodal = () => setIsEditModalOpen(true);

	const handleCloseEditModal = () => setIsEditModalOpen(false);

	const handleOpenDeleteNodal = () => setIsDeleteModalOpen(true);

	const handleCloseDeleteModal = () => setIsDeleteModalOpen(false);

	return (
    <>
      <li className={styles.contactItem}>
        <div className={styles.textWrapper}>
          <div className={styles.contactContext}>
            <IoIosContact />
            <span>{contact.name}</span>
          </div>
          <div className={styles.contactContext}>
            <MdPhoneInTalk />
            <a href={`tel: ` + contact.number}>{contact.number}</a>
          </div>
        </div>
        <div className={styles.btnWrapper}>
          <button
            onClick={handleOpenEditNodal}
            type="button"
            aria-label="edit button"
          >
            <GoPencil color="#646cff" />
          </button>
          <button
            onClick={handleOpenDeleteNodal}
            type="button"
            aria-label="delete button"
          >
            <ImCross color="tomato" />
          </button>
        </div>
      </li>

      {isEditModalOpen && (
        <EditContactModal
          handleCloseModal={handleCloseEditModal}
          handleUpdateContact={handleUpdateContact}
          id={contact.id}
        />
      )}
      {isDeleteModalOpen && (
        <DeleteContactModal
          contact={contact}
          handleDelete={handleDelete}
          handleCancel={handleCloseDeleteModal}
        />
      )}
    </>
  );
};

export default Contact;
