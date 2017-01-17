import store from '../store';
import { startListening } from './listener-utility';
import * as InvoiceBuilderListener from './invoice-builder-listeners';

startListening(store, [InvoiceBuilderListener]);