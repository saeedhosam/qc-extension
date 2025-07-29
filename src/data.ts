import { Category } from './types';

export const categories: Category[] = [
  {
    id: 'pnr-creation',
    name: 'PNR Creation',
    items: [
      {
        id: 'pc-1',
        label: "Coming Soon, Insha'Allah!",
        tooltip: 'Nothing to see here.',
        checked: false
      }
    ]
  },
  {
    id: 'issuance',
    name: 'Issuance',
    items: [
      {
        id: 'iss-1',
        label: 'Office & Mondee PCC',
        tooltip: "Make sure that the booking was created in a Mondee PCC, if not, then you must check if the airline allows another PCC other than Mondee's.",
        checked: false
      },
      {
        id: 'iss-2',
        label: 'Passenger Names, Types, CTCE/CTCM and DOCs',
        tooltip: "Confirm that types are written correctly, especially for LHG tickets. For example, it should be *CHD*23JUL19 for CHD type on Sabre. Make sure you know what's the right plus-up/COMM/TC/TD because you'll need it later when QCing the ticket.",
        checked: false
      },
      {
        id: 'iss-3',
        label: 'DK/Customer Number',
        tooltip: 'Make sure that DK/Customer Number exists on the booking.',
        checked: false
      },
      {
        id: 'iss-4',
        label: 'Flight Segments & Dates (especially for RJ)',
        tooltip: 'Check the dates and the codeshare flights and which airline should be the validating carrier (over the world). Also, make sure that outbound is booked before the inbound.',
        checked: false
      },
      {
        id: 'iss-5',
        label: 'Info Left in PNR',
        tooltip: 'Check if the agent has left any info for the fare needed in the PNR.',
        checked: false
      },
      {
        id: 'iss-6',
        label: 'Fare & Pricing',
        tooltip: "Check if there's a difference between *COM and normal pricing. Also, verify the accuracy of the pricing and whether it's what the agent has asked for.",
        checked: false
      },
      {
        id: 'iss-7',
        label: "Ticket's Coupons",
        tooltip: "Make sure that ticket's coupons reflect the booking's segments.",
        checked: false
      },
      {
        id: 'iss-8',
        label: 'Coupons Bag Pieces',
        tooltip: "Confirm the number of bag pieces on each coupon and whether it meets the agent's request.",
        checked: false
      },
      {
        id: 'iss-9',
        label: "Ticket's Fare",
        tooltip: 'Confirm the ticket has the correct base fare and total value (in one case, a plus-up was added but it just didn\'t reflect as COMM on Amadeus).',
        checked: false
      },
      {
        id: 'iss-10',
        label: "Ticket's plus-up/COMM/TC/TD",
        tooltip: 'Re-price with the COMM entry to check the COMM amount, and then confirm that the correct plus-up/COMM/TC/TD is reflecting on the ticket. Also, the percentage of the plus-up and whether the airline accepts plus-up in the first place.',
        checked: false
      },
      {
        id: 'iss-11',
        label: 'Form of Payment Used',
        tooltip: "Confirm that the correct FOP is used on the ticket as well. Check if it's CASH or with CC, and if it's CASH, is it allowed? (for the airline or the agent).",
        checked: false
      }
    ]
  },
  {
    id: 'exchange',
    name: 'Exchange',
    items: [
      {
        id: 'ex-1',
        label: 'Office',
        tooltip: 'Make sure the same office from where the original ticket was issued is the same for the new ticket.',
        checked: false
      },
      {
        id: 'ex-2',
        label: 'Segments, RBD and Class of Service',
        tooltip: 'Verify that the ticket holds the correct coupons. Make sure that classes are correctly assigned. For example, on TK, especially for INVOL exchanges, you\'re prohibited of exchanging on N & A classes.',
        checked: false
      },
      {
        id: 'ex-3',
        label: 'Old Segments Removed',
        tooltip: 'Make sure that old segments are removed from the PNR.',
        checked: false
      },
      {
        id: 'ex-4',
        label: 'Fare Construction Line',
        tooltip: 'If the ticket is partially used, make sure that outbound base fare on the old ticket matches the one on the old ticket. Also, take a look on whether the ticket has plus-up or not in the fare construction line.',
        checked: false
      },
      {
        id: 'ex-5',
        label: 'Fare Type',
        tooltip: "Make sure that original ticket's fare type is the same as the new ticket's.",
        checked: false
      },
      {
        id: 'ex-6',
        label: 'Passenger Type',
        tooltip: 'Make sure that for example, a child is not gonna be an adult with the new date.',
        checked: false
      },
      {
        id: 'ex-7',
        label: 'Old & New COMM/plus-up',
        tooltip: "Verify the new COMM. For example, if the ticket is PUB fare, the new ticket's COMM should be recalculated according to the new fare and percentage. One hidden mistake was with RJ's plus-up on west-bound, where the ticket looks like a normal PUB, but you have to make sure if it has plus-up.",
        checked: false
      },
      {
        id: 'ex-8',
        label: 'COMM on Penalty',
        tooltip: 'Verify that the new COMM on Penalty is reflecting on the new ticket, charged the correct amount, and is sent to ARC and agent settlement.',
        checked: false
      },
      {
        id: 'ex-9',
        label: 'Advanced Purchase',
        tooltip: 'If the ticket is totally unused, make sure that it was pricing at the date of exchanging the new ticket.',
        checked: false
      },
      {
        id: 'ex-10',
        label: 'Ticketing Time Limit',
        tooltip: 'Verify that the new ticket is issued within the ticketing time limit of the segments booked.',
        checked: false
      },
      {
        id: 'ex-11',
        label: 'Original Ticket Date',
        tooltip: 'It has to be less than a year and the ticket should be valid.',
        checked: false
      },
      {
        id: 'ex-12',
        label: "Same passenger's ticket",
        tooltip: "Make sure you're exchanging the original ticket of the same passenger, not other passenger's ticket.",
        checked: false
      },
      {
        id: 'ex-13',
        label: 'Penalty & Fare Rules',
        tooltip: 'Make sure that penalty and the exchange is according to the fare rules.',
        checked: false
      },
      {
        id: 'ex-14',
        label: 'Bag Pieces',
        tooltip: 'Make sure that the same bag pieces from the original ticket is there or as the agent desires.',
        checked: false
      },
      {
        id: 'ex-15',
        label: 'Waiver',
        tooltip: 'Make sure that penalty is correctly reflected in the ticket in the correct place (ED or TC), and an email is sent to ARC.',
        checked: false
      },
      {
        id: 'ex-16',
        label: 'Form of Payment Used',
        tooltip: "Confirm that the correct FOP is used on the ticket as well. Check if it's CASH or with CC, and if it's CASH, is it allowed? (for the airline or the agent).",
        checked: false
      }
    ]
  },
  {
    id: 'refund-vol',
    name: 'Refund (VOL)',
    items: [
      {
        id: 'rf-1',
        label: "Coming Soon, Insha'Allah!",
        tooltip: 'Nothing to see here.',
        checked: false
      }
    ]
  },
  {
    id: 'refund-invol',
    name: 'Refund (INVOL)',
    items: [
      {
        id: 'ri-1',
        label: "Coming Soon, Insha'Allah!",
        tooltip: 'Nothing to see here.',
        checked: false
      }
    ]
  },
  {
    id: 'merchant',
    name: 'Merchant',
    items: [
      {
        id: 'm-1',
        label: "Coming Soon, Insha'Allah!",
        tooltip: 'Nothing to see here.',
        checked: false
      }
    ]
  },
  {
    id: 'emd',
    name: 'EMD',
    items: [
      {
        id: 'e-1',
        label: "Coming Soon, Insha'Allah!",
        tooltip: 'Nothing to see here.',
        checked: false
      }
    ]
  },
  {
    id: 'name-correction',
    name: 'Name Correction/Change',
    items: [
      {
        id: 'nc-1',
        label: "Coming Soon, Insha'Allah!",
        tooltip: 'Nothing to see here.',
        checked: false
      }
    ]
  },
  {
    id: 'seats',
    name: 'Seats & Wheelchair',
    items: [
      {
        id: 's-1',
        label: "Coming Soon, Insha'Allah!",
        tooltip: 'Nothing to see here.',
        checked: false
      }
    ]
  }
];
