/************************************************************************/
/*																		*/
/*	HYGROI2C.h	--	Declaration for HYGROI2C library 	    			*/
/*																		*/
/************************************************************************/
/*	Author:		Arthur Brown											*/
/*	Copyright 2017, Digilent Inc.										*/
/************************************************************************/
/*  File Description:													*/
/*	This file declares the HYGROI2C library functions and the constants	*/
/*	involved.															*/
/*																		*/
/************************************************************************/
/*  Revision History:													*/
/*																		*/
/*	01/30/2017(ArtVVB): created											*/
/*																		*/
/************************************************************************/
#include "I2C.h"
#if !defined(HYGROI2C_H)
#define HYGROI2C_H

/* ------------------------------------------------------------ */
/*				Include File Definitions						*/
/* ------------------------------------------------------------ */
#include <inttypes.h>
#include "mbed.h"




/* ------------------------------------------------------------ */
/*					Definitions									*/
/* ------------------------------------------------------------ */
#define HYGROI2C_I2C_ADDR   (0x40 << 1)
#define HYGROI2C_TMP_REG    0x00
#define HYGROI2C_HUM_REG    0x01
#define HYGROI2C_CONFIG_REG 0x02
#define HYGROI2C_FREQUENZY  100000

/* ------------------------------------------------------------ */
/*					Procedure Declarations						*/
/* ------------------------------------------------------------ */

class HYGROI2C {
private:
    I2C i2c;
	void writeRegI2C(uint8_t bReg, uint16_t bVal);
	bool readRegI2C(uint8_t bReg, uint16_t &rVal, unsigned long delay_ms);
public:
    HYGROI2C(PinName sda, PinName scl);
	float getTemperature();
	float getHumidity();
	void  begin();
};
float tempC2F(float tempC);
float tempF2C(float tempF);

#endif
