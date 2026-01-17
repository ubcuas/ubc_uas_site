#include <inttypes.h>
#include <stdio.h>
#include <stdint.h>
#include <string.h>

/* Here is your personalized structure! */
struct mystruct {
	uint32_t f1;
	char f2;
	uint16_t f3;
};

#define	FMT1	"0x %"PRIx32"\n"
#define	FMT2	"%c\n"
#define	FMT3	"0x %"PRIx16"\n"

