import React from 'react';
import { Container } from "@material-ui/core";

const InvoiceHeader = () => {
    return (
            <Container maxWidth="md">
            <h2 style={{ textAlign: "center", marginTop: 15, fontFamily:"cursive" }}>Customer Invoices</h2>
            </Container>
            );
            }

export default InvoiceHeader;
