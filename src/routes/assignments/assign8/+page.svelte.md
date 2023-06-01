---
layout: assignment
assign: 8
---

<script>
  import { base } from '$app/paths'
  import Callout from '$lib/Callout.svelte';
  import { class_data, fixupLink } from '$lib/classData';
  let assign = class_data.assignments[8];
</script>

### Table of Contents

(Auto-generated)

## Overview

This week's assignment will be shorter than usual to give you time to work on final projects.

This assignment consists of four short components:

1. Practice with common errors when writing code that deals with numbers.
2. Practice with various forms of text encoding.
3. Practice with various forms of image encoding.
4. Practice with various forms of video encoding.

We expect this assignment to take 0-1 hours depending on your proficiency level
with these concepts. If you find yourself unproductively stuck or
unproductively struggling, ask on Ed and/or go to office hours!

You'll probably want to install FFmpeg using the instructions from the
[software page]({base}/software).

This assignment should be completed on
[Gradescope]({assign.materials.gradescope}).  The questions are repeated here
for completeness. You can [download the files for the assignment
here]({assign.materials.files}).

## Part I: Number Encoding (0.3 points)

### Unsigned Integers (0.05 Points)

What would the result of this code be?

```c
// uint8_t is an 8-bit unsigned integer
uint8_t x = 45;
uint8_t y = 90;
return x - y;
```

### Signed Integers (0.05 Points)

What would the result of this code be?

```
// int8_t is an 8-bit signed integer
int8_t x = 45;
int8_t y = 90;
return x - y;
```

### Floats (0.1 Points)

What would the result of this code be?
```
// float is a 32-bit floating point number
float x = 0.1;
return 0.3 - (3 * x);
```

 - 0
 - 0.1
 - 0.2
 - 0.3
 - none of the above

### Endianness (0.1 Points)

Assume I'm using an Intel x86-powered CPU (x86 CPUs are little-endian).

I hexdump a file and see that it contains these four bytes (represented as hexadecimal numbers); the byte on the left is at the lowest address and the byte on the right is at the highest address:

```text
43 53 34 35
```

Which of the following could be the true contents of the file?

 - The 8-bit numbers 0x43, 0x53, 0x34, and 0x35.
 - The 16-bit numbers 0x4353 and 0x3435.
 - The 16-bit numbers 0x5343 and 0x3534.
 - The 32-bit number 0x43533435.
 - The 32-bit number 0x35345343.
 - The ASCII or UTF-8 string "CS45".
 - The ASCII or UTF-8 string "54SC".

## Part II: Text Encoding (0.7 Points)

You can [download the files for the assignment here]({assign.materials.files}).

Useful commands:
* `ls -l` will print the sizes of each file
* `ls -lS` will sort the files by size (this may only work on some computers)
* `file` can try to figure out the text encoding of a file automatically
* `iconv [filename] -f [encoding] -t UTF-8` will try to decode the file
  `filename` as if it were using the encoding `encoding`.

The encodings used are: ASCII, UTF-8, UTF-16LE, UTF-16BE, UTF-32LE, and UTF-32BE.

### Text Encoding Identification (0.05 Points)

* Which file is ASCII?
* Which file is UTF-8?
* Which files are UTF-16?
* Which files are Little Endian (either UTF-16 or UTF-32)?
* Which files are Big Endian (either UTF-16 or UTF-32)?

### File Size (0.2 Points)

Assuming you want to optimize for size while preserving 100% accuracy with the
original file, which encoding should you choose?

 - ASCII
 - UTF-8
 - UTF-16
 - UTF-32

If you want to really optimize for size, even if it means losing a little data, which encoding should you choose?

 - ASCII
 - UTF-8
 - UTF-16
 - UTF-32

### Morse Code (0.15 Points)

One very old, very widespread form of text encoding is [Morse Code](https://en.wikipedia.org/wiki/Morse_code).  However, Morse Code has some issues that make it unfeasible as a text encoding for computer use.

Which of these issues with Morse Code are solved by UTF-8?  Which are solved by ASCII?  Which are solved by UTF-32?

 - different characters have different length encodings
 - it only supports basic English characters without country-specific
   extensions
 - its encodings are not 32 bits long, and therefore are less efficient to
   access on modern CPUs
 - it requires three states (short, long, and pause) to represent, not just two
 - there are many language-specific variants

## Image Encoding (1 Point)

You can [download the files for the assignment here]({assign.materials.files}).

Useful commands:
* `ls -l` will print the sizes of each file
* `ls -lS` will sort the files by size (this may only work on some computers)
* `file` can try to figure out the image format of a file automatically

We accidentally erased the file extensions from these images!  Help us figure out which format is which.

### Matching Files and Encodings (0.3 Points)

Match the files `a.dat`, `b.dat`, `c.dat`, `e.dat`, and `f.dat` with the
encodings BMP, JPEG, TIFF, GIF, PNG, HEIF.

### Image Size (0.35 Points)

If we wanted to optimize for smallest file size, which image format should we choose?

### Size Ratio (0.35 Points)

What is the ratio between the sizes of the smallest and largest images?

Your answer should be (size of smallest) ÷ (size of largest).  Provide the answer as a decimal number (e.g., 0.01), **not** a percentage.

## Video Encoding (1 Point)

You can [download the files for the assignment here]({assign.materials.files}).

Useful commands:
* `ls -l` will print the sizes of each file
* `ls -lS` will sort the files by size (this may only work on some computers)
* `ffprobe -hide_banner -show_entries stream=codec_name [filename]` will print out information about the codecs used within a video file.  You'll have to install ffmpeg to use this (`sudo apt install ffmpeg`, `brew install ffmpeg`, or follow the instructions from https://ffmpeg.org/download.html).

We encoded the same video with a bunch of codecs, but we forgot which file is which codec!  Help us sort them out.

`ffprobe`'s output can be a lot of information.  Remember, you know lots of shell tools to help you wrangle data!

### Matching Files and Codecs (0.25 points)

Match the files `{a,b,c,d,e}.mkv` with the encodings H.265, H.264, Theora, VP9, and VP8.

### Audio (0.05 Points)

Which audio codec do all of these files use?

 - MP3
 - FLAC
 - Opus
 - Vorbis
 - AAC

### Quality: Frame Rate (0.2 Points)

One of these files was encoded with the wrong settings, so the video ended
looking very choppy (it has an effective framerate of around 1 frame per second
instead of the expected 30).  Which codec was used on this file?

### Quality: Image (0.2 Points)

One of these files was encoded with too much compression, so the image quality
within the video dropped.  Which codec was this?

Hint: this is different than the answer to Q4.7

### Video Compression (0.3 Points)

At its core, a video is just a sequence of images shown at a specific speed.
In fact, when you decode a video and play it on a screen, it turns into exactly
this.  Since we already have compressed image formats, what's the point of
having video-specific formats?  Why can't we just compress the images
individually and wrap them up in a container?

Select all of the following which are true:

 - video compression can take advantage of similarities between the video and
   the audio, but image compression can't
 - video compression doesn't need the same level of detail in images as image
   compression does
 - video compression can take advantage of similarities in images over time,
   but image compression can't
 - video compression has to be lossless, but image compression is lossy
 - video decompression needs to happen quickly (in real-time), but image
   decompression doesn't
 - video formats are designed to be sent over the internet, but image formats
   are designed to be read from a hard drive

## Feedback Survey (0.5 points)

Once you have completed the assignment, you can earn an additional 0.5 points by completing our
anonymous feedback survey. Given this is the first offering of the course, we want to collect as
much feedback as possible to improve the course in the future. You can complete the survey
[here](https://forms.gle/8sbc5sPoFWFQAJ2d8).

Once you complete the survey, you will receive a completion code which you should place in a text
file named `survey.txt`. The survey is anonymous so submitting the completion code is the only way
to verify that you completed the survey. _Please do not share this code with anyone, as that would
constitute a breach of the honor code._

## Submitting Your Assignment

Once you have finished this assignment, you will need to upload your files to
[Gradescope](https://www.gradescope.com/courses/468962). Make sure to upload your files to the
Assignment 7 submission page. You should also upload `survey.txt` if you completed the survey.

```shell
zip -jv assign7_submission.zip ./Makefile ./survey.txt
```

_All files must have the same name as specified above. _

[^1]:
    This is actually a very realistic use case—we use a static site generator to generate
    cs45.stanford.edu.

[^2]:
    You don't need to write any Markdown for this assignment, but if you want to learn, here's a
    tutorial: https://www.markdowntutorial.com/.
