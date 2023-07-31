import { Router } from 'express';
import { changeRoom, getBookings, postBooking } from '../controllers/bookings-controllers';
import { schemaBooking } from '../schemas';
import { authenticateToken, validateBody } from '@/middlewares';

const bookingRouter = Router();

bookingRouter
  .all('/*', authenticateToken)
  .get('/', getBookings)
  .post('/', postBooking)
  .post('/', validateBody(schemaBooking), postBooking)
  .put('/:bookingId', changeRoom);

export { bookingRouter };
