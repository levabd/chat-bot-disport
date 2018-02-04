(function() {

    // Buttons
    $(".more-about-spastik").click(function(e) {
        $('html, body').animate({
            scrollTop: $("#treatment").offset().top - 80
        }, 2000);
        e.preventDefault();
    });

    $(".botylinotherapy").click(function(e) {
        $('html, body').animate({
            scrollTop: $("#botylinotherapy-advantages").offset().top - 80
        }, 2000);
        e.preventDefault();
    });

    $("#types-button").click(function(e) {
        $('html, body').animate({
            scrollTop: $("#types").offset().top - 80
        }, 2000);
        e.preventDefault();
    });

    $("#generalised-where").click(function(eventClick) {
        $('html, body').animate({
            scrollTop: $("#generalised #clinic-selection").offset().top - 80
        }, 2000);
        eventClick.preventDefault();
    });

    $("#focal-consult").click(function(eventClick) {
        $('html, body').animate({
            scrollTop: $("#focal #doctor-selection").offset().top - 80
        }, 2000);
        eventClick.preventDefault();
    });

    $('#generalised-tab').on('shown.bs.tab', function(e) {
        $("#generalised-where").off("click");
        $("#generalised-where").click(function(eventClick) {
            $('html, body').animate({
                scrollTop: $("#generalised #clinic-selection").offset().top - 80
            }, 2000);
            eventClick.preventDefault();
        });
    });

    $('#regional-tab').on('shown.bs.tab', function(e) {
        $("#regional-where").off("click");
        $("#regional-where").click(function(eventClick) {
            $('html, body').animate({
                scrollTop: $("#regional #clinic-selection").offset().top - 80
            }, 2000);
            eventClick.preventDefault();
        });
    });

    $('#focal-tab').on('shown.bs.tab', function(e) {
        $("#focal-consult").off("click");
        $("#focal-consult").click(function(eventClick) {
            $('html, body').animate({
                scrollTop: $("#focal #clinic-selection").offset().top - 80
            }, 2000);
            eventClick.preventDefault();
        });
    });

    // Spastica Clinic Search
    var $emptyDoctor = "data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHIAAAByCAYAAACP3YV9AAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAABmJLR0QA/wD/AP+gvaeTAAAAB3RJTUUH4QwWAS41/Tgg/QAAHSFJREFUeNrtnUusZld1oL/1P+/bt2xcZdqUXc7AsXhEYCRwjAckYtKYOOQBySgRCsrDSdOCzighDBK6Rwkk3RJNS+lGySiEbgWckEyiKAMejiVjS5gAHuBHYcVVtutxXffe/716cM75/73XWXufU7ar7oWwpKv/3HP2Yz32WnuttffZR1QVgGfPnwdVECl+Kwj+FxHUPoN6+fBepr3ktW2rak9EgD6qO8ANwGngDHAL8AbgFHATcCOwCQwQGZZ1x6hOENkHLqD6EnAO+D7wPPA0cBa4DOwhMl0SW+HWDseojIigHo9MOxFvTX+1Nhye9nJIWEarJcIrW7VjIXxuGZCCoq0BqjcAZ1C9E5E3AncBtyJyO6q32H5kWV1jusLfOq3PA88IPKeq30b128CTwNOoXgYmSd54wi3v1XgGCGDv1ksRt+ENmOpadSVIq23LUeCBp6UhwtUoMvds5xkYADcDbwbuQeRuVN8E3AF0aviGAgoJt9bBY/xqgN2CyC26EvgCeEpEvqWq3wAeRuQJ4AVUJxE9li47SM2gUcuLUPNyvLGDL6Bflqb13DlaQcIciqexOST8+zcDdwLvAe4D7qYwk3kznGrbMLnC0Q6CpYbkzDxcAL4BfAX4R+BJRF5ImlyPRktD2Geq39RUZc1vTZBNTEmMplZCSz8/A7wLkQeAn0T19FUIP41fBkd37vKeeYMGzgp8XeEhga+q6tNJxodtJnwDYWWCkwrRwFOpOTttme+M9EZHxzJb9Q7gZxD5WVTvATay/TY5R6ZeOFdG2mgZ7c3X5nk0767KHwAPo/olRP4W1adquJu2cgKt+BIKNjkYkoI8dy45mnKM0iZT4AvlFPBB4APAPUC/TX8Ng8LvP1HPwz3nOWbxgCkiDwNfQPWvKbzhPJ4efbDCK+fZes8ijawYkEK+xahpgA7wS8BvAu9AZK3RdDaFLxbnJqZlnjdqSwrHFYwQeQT4LKqfBxY5E54TaGMIY/D258iQOfBKhWadi7ch8l9Q/Y+I3FhjekIgSeammVkTiuuRh2bW9p1icK7vmFcXEPkHVP9ERB5LOlJNc3fC9LrxakXg2fPn0xN8KODMyHAIAjgB/BrwIEX4kGaSJ7yGsm0Z7MavTc6atTxt5uj4/lOIfAb436heTOJYa0LaK84r8lrzSHt13wp8HLgfWGs1V6Tab+sxpwSYou1qPOOme95gFxkBX0b1k8Djrei0eOOYV1OuU2vUBtPGo5Pgfy83Uz7vUTgyfwH8PCJrEXJtB4oX/DbNWwZnyeDfqu+UJQqzQ6nEQwFrqP48In+ByAdK3sQ8tvg7dEWJAkfwnbi805BBPlR5tYxRRVW3gN8Tkc8CPxEWSDFRUoxPMT3nKYdhESb1VeAX18tptBWUFaqjNQlcBdWfQPWziPwesBXVbxrYodBsatDTyCi1ZStbhMsyGj+4BZFPA59Q1RuD9NeqfdumcWY0NYgsny2hziB0012++UvHkm3Md4h7rr/CyfsE8GmKRH+9Py/FZ5+HbZdle1FBD+kUY+sI34XqHyNyfxIRI9gaM1M4OMyvOSBBnV6nQ6/bpdvpoMBsNmO2WLBYLOopxdQ838aBCnGyliTtvHWBDwOvR+R3Uf1OVga5uDikOSk0Vw4FQk6ptwN/Bryrxqhc+00xXVUnh1dITLfL2mDA2nDIsNdb9jFfLBhPJoynU6azGdP5vE5D6KGGzGuapz3BWhTD+ita7wdOIPIR4NGkmfU01BF2PbPTJk0Xl3sH8JlSmLEQcsKzwr6KGNHLVe5sbrK1vk630yEH88WC8XTKaDxmNJkwWyzqeGY841Zrsrn7dXgUkQdRfcTS1zoMw2R22gT+xg1+K/DnIvL2VisfTa56WwiY1O12ed3ODsPB4OraoBDq4XjMwWjEaDJJe6FtBJSiLaQxFcOKPIrqhxF5/BWFS5FGpnYIeJULhO5E9XOI3NuYEisRTy0jebFi20F18+4ua69AiBbG0ylXRiMODg/be7ZNwq2YHNDi0V7e+xoiHwKezKYODZ/qXmvOFa7b7f8g8Cng3qheaiRWDkqJhA0JPFO2LBPOQ8a73Fxff02ECDDs97lpe5uTu7tsrK35+FlcUgI1DK8GL5VATbmSL/cCn0b11hoLU/II5FKfUFJB6gp2gT9U1fcu7XMuDeY9D9t2NFI8U+w4GhvD4asSngfDwYDX3XADO5ubMeMCWsXSWg3WlPkkFqBUPLGOlOp7gT8seezyKhWLd2qFbWYnRq5belm/WuJTNxVlHQna0ACRGjheYc1RChhQ/b/W7zPo9bhWsLu1xe7WVs2DVYzJb/LMLW/L+poa1PArwEcowpSo76quB72wIQE0HzP9IqofBXrWBNrF5Sgv2ESkBafecDBg0OvR7XbpdbsMez06DR7qq4WdzU0Wquzt79eZXuHZ5PykQpb0YOgBH0Xku8DnI48Zkvuool10mtMYkbei+vuI7Nr4ygs3RGQ1KBqS0jY4t0tQN+7ssDEcts+Tvoawu7XFZDYrvNqmRIHHN8sjx8lzrNou8Puofhd4vGaenTY6WQQqm1wI7+PAWzxWLhEMGN12I5aXYQlThVvr62yurR2JECs4sbVFsveET2Fzxlrmfi39Ea/i+fYtFCtHJ6q8Md68WoJvmwL1Lzv5EPB+mwsNc66p+uFcuZywA0JT82GF/Ob6+nUTWAr6vR7bG/XtRDlr482jmp6yUtr9fuBDUR434S13ag3VA9u3o/qfRKRrXfFa445bXAs17ESfMVXDa+zQXA1stsgaJT1+6+hZ7Qz5EIc6XeC3JciapebiTrLjotIQ+BhwR80+p3KAlqDESArnwJTD8FrFiK8F9LtdBv1+nb6YqHQcbu6rbSe90PBjCh9DxI+13IRAPR56P/BA1JEXRjixnqQRi9qoLZgui8mKcccE+t1uTGebkMrQZacOT/BiFUb1AVR/IZeE6LidFXASeBCRraDBGFEbcwZtabpd3/sL2wM6nQ79Y2JWK+iF+ISOSWIVZPmfN5Wk0pTh1FM6myKyJSK/RfFaQ51veCm61f+/RLHre1XJICweMVVbKS31TLIlVGS5nnicoDYkPd8g57mH1qhNTF0Ktfx7J/AB1ycJnR3jXd5Bsf+0X8vy2CxDm+Wasg21QrXaXIU7qiszdlwhMSVYuiU1wFsIVWL+9ClkcoeHR2f1f6QV7wPeWasQItd2vc1obZQ8dsyrNjHnCGHRJvg31zV6rFIsya9PUQqr+LGAdyLyPi/Z4IUft0vxMk387iSrhHEtAZBjupkH2r6g0jmOgqwWoT38c/+HPLS8Wz5WKzSPXz1UHwBuX/ZTWrp4jizSLPep6r2eA7JM9oZItSCi0sLkLjMv/mybl72OMPcEmfBII9MZ/Kk3n1prhNfNsp97EbkPEHeOLLXiJuABRDa8fJ5F2u3YCT2qcra0WI0OzMviOAsyNe+FNMThgx9j5vLQxtQGJnoD1QcQuSlsw3qtdxFsoKpB4KRIqnNaaFM1OkOmGPM6n8+vl3xagaoyq3BKhV02NvQcm0RqLrMn1lOkd6F6V1g09O97iPw0cGutsdA0BIQtnxtz0WRCxd5zzOt8Pj9WwpzN55GVqAXzjrMWLajnsj4eP40jZBaibxWRn0Zk6ceEgnw9qu/OZm485J1YytvOEJZ31yodxk1TzsURwGw+j+bI5L4eaw6dPGtVLvIdvDCsvFbqKT1VfTeqr69nduBNwNuSlISJ3jDv6mVoUoF/VTflkgfXCozG4+smqCaYzud+6i2Xd7X0lnUq7aoEXTmQoQZHMbfHu0JWb45yrc+eO9cXkXdS7RVJCKG2koHxRAMB1/akhMRbYj0GAAfj8bFxepbbJSsaEvFgcgBHJPrlNVe+zu9dij3FfVhp5C6VNjqhQAQmVVeNKrvBKuXRtkpNlbA5HB6beDLK+9p5rA2OqeWq8F6bQRC3+TZEdmElyDOq+uao0zZLNYEGapPgM5l7j7hut8uWt5h7RLC7uVnkfk1MLHZ+9CyR5+V7TlEbiB2uN6F6BhE6z54/LxRn25zxOvEaqXVs57iGPGJyZ0EY4HrEHyGISLHIHc5rNoTKaKha3nnzYdWG4/xUv+EAUtU7ELkTkB5FYvzHUe2G81uUhvMcmurauMmam/es9hrzEp78tFBlrspxWv9QO+14zo9NpJhfu3Bg/Y7aUTewTItKgENZpovqjwP9DqrbqL7RFaJF1nhb3rJNdkHZCtD0ERKwWCyOVRy5WCz8zI4RhGuJEpZJ7TQF6ZefDH+C/t6IyHaH4pTFN1SPzWTqOjI5zzNcUBbPxFqiPPNaDqbpbHY9ZNQKpvN5/OZWYhnO8qlKHES8yFi1Gn8x8WjdOp4GdjuInAbORCMhoyk15ifSTksz0GJkRvUC4o+TIGezGRomKELP1QvBymsbKzaGK94qSEqRirZuR/V0D9XbgVNZjWljLk0HlRMQ2vXG0EPjl2gns1neXF9HGE+nPs0t6cr6Goan6tTPnNZ5CritU17kkUrETILxwsIsRFkvm64rf2ueXAmT6ZTJMdDKhSqjyaQeaiTocZ97muvFo1bTvWRB3SKe6iDyBpeRLVJP0WvoLdJX4pnnnPaLcOXg4FrLqRFGkwmz8HX1yvxnBnHShuSsSyC8aD9UsqnlwHpDBzitKaZ6nVsNcjzXNJ7O3CqZ189VORyPj3SuVFX2Dw9jRle0GJMZ+gS1HflV/ZaZrcbzF4g83NMdijPAm1qNriMtzAXuNueaMi22n2CgLFT9lfnrBAtVpvO5Lwxv3nul83nOD0llx1Z43NRBdbdVg5iR5XhmoaYuw5mU6UzNJWG5su7iCAU5n8/RxcLfp9sQF0fa6zM0DiuMORU7Z3o4FB3c0AE2kstP5rc24Zp60alYKeQrJAF3hcQMFhE5UtNaZZiSeDopN0vrUiipQWshtRqSSq6LbBaCdITiVlTzdlUQGkhupFriSyTtYqmXOFBgfISCnM5mrhMW8caLJ811NKd6ls3yO8fH8FkBGx2qbY+eCjsVraZVCGqmToGLw4icRxa0MZlOV/tlrjOMqvjRCi5C1pjHpsRHmznWhHn2nvm/1wEWbiFTWDyNtcg5E3NtQ7I13wmCQ092sVhwcAS7BWbzebFLweFNLUmRS3o0KIebMAj6sSGec7jGogNM3M5svq+6V5pTdynLmR/sSkeoaZGwG1ZZXj44uO5Oz97BQXJ/UfKcII8vziqPx+Oa0wOuSXYcr3EHGMdt1UeaDU7DREBtdJhRYz1dL0ORWtZa/pYhyMUrV66LAAHGk0k+GZHLhebi8Ta+RO6+78NMO4gcxGXbBay2vHNua3GZYkJb5IN7+6MRF19+mavD8OphMpvx0t5ezDyDS+5+7fxZG4d7CwmaeYs5vPb5dNBBda/JK0ouFtuMjl32sh3b/GJOoKxMbrUagiqHkwmLa+z4XL5yJXauUhrmrBTV2VSnUzxTK4ljR0OhpVag4FIHeDEyhzn7HV5LcKiDyXpoSkh1KuuOj5Pui9JdXL3VuBqoTRspOtJMjaYKL6i3KzrRiR9h3wHNtX5jvF7qAGcjzzKFrEe0QbqJwOTgsFrrueDBqNWmAfJqwQ4gj0aNF4vFY7BqftCJec0woL+WXLGJ+VgJznYQ+X72hVXPo/QCV8/uO8ypCToMVaJupWbeK228XhoZ0ePQvfRoNd6LQ25wh8KhnXUJeZFIpn+/I9Xnf6wLbeezFFHh/SDHmn3/I7FU46b4wnstCX9VIGbzU4vAXlKmN5VSM/VT9dwTJU07pVU411HVZ7HfcmqblbBJAo3fn6whaJij9pnVfscRWpR/1wq0aj/I9br0BveqGNvudU3mV+19iV/Scac6OyhWZc4JPNtB5Cwiz7iCCn7dTEbGy8oeXhtqope3tLiUMBwMuGlnh8E1PF9ARNheX6dfHg3j7rVJTC0VtqHZjOa0qg+HtjB744V01vkJpPGMqp7tAJdQPWsFYRmfdaNzKwBOtsId7YCkRj3FcS0ntrfZXF+/pqdCdkTY3tjgpu3t9DugqcS3Y0KjhQFrKsPYM+xjKVPjIwT1daXxZ4FLHVRfFpF/jRD1YiUn/IjKOM/c/Kz16IK/pCmhOAXreh5nNuj3WR8M8qsThvGWB+7huiEEmpf1kG2cWVUvyv8r8HIHmGpxnOS8JjRnDlyOHm8+1PiNXbUmKZVPzYUsJWyGx1NfJ9hcX3f35izxDLMyEm/ldEOPBJ2pGd/dtxNfz4HvAtPObadOKSJPisjTyZyhNxLqvbqjpmZCnEHiBbzhnNDrdl/RVwReLawNBqtDm8IpwrFclUedfbnVOoqJeLjm7Dhxa1n3KRF5EtBOWeNphSdahdk2aLfIWjAjajmRB8+SR2KWCA8HgyN5vU5EGFbn4aUcnVSYkvJ6vTi6xjIn4xXeX9X9lpbfd+6UnVxC9bHoAPUU40JBhITUuZBNbWnYh2TOHQDWjvBwwbXhsB4vhkJK+AdVucjZcWhLhWqS4V3QxmOIXIJSkLedPDkFHqHwYJeM9hBIpZRqyKViMTs3lPe87x2vD4fctLMTf77hOsP6YMDu1hZrg0HNctTiYC+BksuI2fuhI2jL1WVxqZTZFILTrUTkCYXHUP0p95u+1uRV97w40iAZCswiHEL1DuL6cMjacHgsDt3tdDrF55o2NoqzzUcjDieT1V4eTzBN3mqKZ17OWZOfVnoMeKKq01u1of8G/DPwU43b/DX7LoJfzxIWaGmv22V9MGBjOGTQ76fN+hFCR4pPVKz1++wsFoymUw7HYw6rcw5SggvyyO5GcM+qeTld6zEXsvq3qplwyM+AfwJ+HXvWjnWD22ZucowB1tbWWB8OWT9GZwW0gU6nw8ZwyMZwyGw+X35bazydJr8koIH5db/E1yYtumrzOQpZLbcX9kyB7wBfReSDyYbK/5ffuaLuJheXvrAH/X5hOgeDlUf4Awy9bpedzU12NjeLL+CVmrrci+vEgilh16acdAjzVSD67mR8AqTIS6g+RHHM50atI8J2zYqF562VIBQx2eb6Omv9/jX/8MpRwVo5t29vbDCaTNivvoLXBI7F8zS1VI59RB5C9aXwvtVIBb4CfA14T220pNTfc35E6HY6rJcCHPT7x+pwh2sJ3U6HzbU1NoZDxtMp+4eHjKbT4lV6h48C9Z1xTrnyv6+j+pXlv6Xlq53JCjwDPAS8G9VeeEBDUc8/8GGJjCrdToeNtTW2NzboHfeTkK8hiEjxhdnBgMlsxsFoxP5oVLyUFGhcxE0b1oV8L+bEhyhktCoPyUMz/g74l8ipCVNwK0zjjD6wMRxy8sQJTmxv/7sWooVBr8fu1lbxWcPMV/bcL/WxXBJ7hEI2sWcvkvjKgMhTIvJ5VKfLW0VryUQ6FB8Fe93u7rH7OsBxgn6vF3/W0C57eaFL8TtV1b8CnqqVw/vKwErDPg98vWqo6QMuO5ubxWf6fgStYHdri+3NzXgnYmKts4wj/wX4AsV13JhqQiMLYZ0Xkc8AVzS+b8sBHLtPO/wgwImtLXrdbj0Zbn9VD1D9LPD88l7StJY3QlDVLwIPJXN+gZm9vL/PZDrlR9AerhweFhuhU8uHUK1zfklE/l95Iy5TWsn6J5ViGAOfQuSp6G6QdqpgsVhw/tIlZsfgFI4fBDgcj7mwtxcfFWeXvABV/Z6q/omqjtzkQQmxaRXxDut5FPgfwJyq08p2m3lzocpLe3tH+qr4DwJMZjMu7O2l9zqtdh3Mgc9IIYNsor2mke6ipurngC9WRWsf4QraGE+nvLS358aaP4LincuX9vZqsSRQm7ZU9Ysi8n9qy2UmNJHaHBkWjv+/BHxSRL659KLC5+b6cDzmxcuXfyRMA7P5nBcuX/anH60dNvVNRD6pqhfDMrXtIhShiP9pXs+LEnkc+K+oXo5WzEP7Hmjy4WTCi5cvH5ujrI8aJrMZ5y9eZDqdJjdlBcuHe8B/Q/Xx8kF6aa+8n/ZanZyfqv5f4E8pl0+SBy2VdSrNPMpzco4DjKdTXrx0yT8HoT7QZ4h8GvhCKAP16gUKlw7+/PXFuYj8KfCX7uEOzsr/aDwuRuK/U2/2YDTixcuXYyFK4tX9Av6SQlnmjVtDAui4BYJJVcx9LfaKfEJV/75Wz07a5e+0NCuHx+jzD9cD9vb36xYp2HzmwN8Dn0D1Ulh+uV82qC/J8MNCaqtioXnPAR+lWO7y64a/IswXC164dIlLV6780DtB88WCF0taIz54vCmvpeDlx4DnKp6ZaS3qI51rrSrnIH7+JPDbVDFO0HltL2cg0L39fc5fvPhDmwU6HI85d+FCcZxMwueItKu4/6iq/g4i363tRMTZ8Ba2V177plWdV8J8IT8u8CAQBazLF0xMtqhKEI+nU56/cIHL+/s/NNo5m8+5sLfHC6FTk3ACo62mqo+KyIPAYy6HbUSQ2oFYMfLZc+fqDbRlssjbBf67wr3JrX8JBIb9PtsbG0e6d/XVgKqyPxpx6cqV+m66iv5VYfvsa6h+BJFHG/ft5GQh4giyzZ5Vv/G7gD8G7q+V9ZLujkB3NjdZzyy6Hje4cnjIlYODVqc8O0uBXwZ+F/hOuKsu+cmNBln4gmzSRCdFdPrkSZ49f/4WVP8I+BDQTe2ky8H6cMjW+vqRve/RBPP5nMPJhJcPDooPn0F90OfpnAOfA/4AkedbWz2W2z3qy1hYQea0xzGR4Si77eTJqp0tRD6G6n8GbgzbirZOxhjW+hj0emyurbE2GByLHQeT2YzD0Yj98biYAzPTRY22FQ8voPpnwKeAK1ch/FybhSwqxp49f94/d83rIBRK+fy2U6sz7p89d64H/BzwceAtYDbQOYKziIX9VPtgB/3+dX2NYDKdMi73qY6m0+SW/iSTl7dEVfWbwCeBv0Fkltpk5e6yk8xx4VUZa1qTZ+6khFBCKMhAoG9F5A9QvR8Y5gQWQaLvbqfDoN+n1+sx6PUY9vuv6QavyWy2/LLBtLyu7dtNLbKn8R4j8mXgj5a5U28gN+1StMI0fdZNa1jAaoyHsKORkTDPnz8BfBjV3wLuyDHSfXkoRXS5b7Yjxbsj4Z+I0Cmf2YGpWhxQOC8/2TRfLIqvx85mLCiP3a5vCvaQTTsfKzyfAv4nIn8OXGzre9T4kBpEgWzyc2SLTpMMr9+7myJz8V7gRLaNNv2mzJGn6ak+cqFBrs+UeVsJ/SJFuu1TwDeyvCLeE5ziRXaQw9XHkeEIdRvPQwf4ZeA3gHcgspada6523gh+qzncapQ9yDY5/zQMmITWjAQeUfhfwF8Bi9ba7fHR89oTDmckyGRHHoRmoCF4ddo9BXwQ+ABwD+XnZZPEttE+F8X66cNZeqxgUv0YTRaRqao+DHxBRP5aVc+1jZ+j9huSJznNzmtkCKGra+OZq2Xy6tmPIfI+VH8WuAeRjRZ10gIvy9XCnIYwoXHwpO8fIPIw8CVU/w6R70X8atF3E52N96vHrUyrQSaruU3znj/qziByH/AzqP4kIqcbB4llTgMDah/YfKWBeAFnKTZv/y3FS09Ph/1FoZkVattooNmMxwP7qjM7V2uCmsxkDDejeifwHuA+4G7gxlcQeCfxWzoWVynMMpj/BvAVRP4R1ScReSEXB7s79A2+FQfaJkqqOhENyVxr3vtsNzflRmGIkN/OAJGbgTdTzKF3o/omivClvjs+ZzKbhJsGBb6HyLdKAT6MyBOovkB1oH+bQd/CkbICXzowOUfM0N1OI3NqbgWXIsSUsycI1whc9TGg+OrsGUTuRPWNInKXwq0U3768xeszdHQi9z69KPC8iDyjqs8h8h3g2xQngj2NyGVUm99YzWmQ17fhYxP/UkJMC9J21kZwuTkqbCOXc20iQFUQ6QM7qN4AnEbkDKq3UJx78HqK/O4JYJtCswclMycKE1RfBi6WpvJ5Efm+wvMUBw+dBS5T7GKbgrMjo10iIFm+dYKhRbYn7PP/A8k3uANToyxrAAAAAElFTkSuQmCC";
    var playDoctorsSlider = true;
    var excistDoctorsSlider = false;
    var doctorCount = 0;
    var $currentSelectedRegionDoctors = [];

    function createDoctorElement(doctor) {
        var base64Thumb = doctor.main.thumb ? doctor.main.thumb : $emptyDoctor;
        return "<div class='item' data-doctor-id='" + doctor.doctor_id + "'><img src='" + base64Thumb + "' alt='" + doctor.main.name + "' /></div>";
    }

    function createDoctorElements(target) {
        $currentSelectedRegionDoctors.forEach(function(doctor) {
            doctorCount += 1;
            target.append(createDoctorElement(doctor));
        });
    }

    function queryDoctors(regionId, doctorList) {
        var $selectedRegionDoctors = [];

        if (typeof regionId !== 'undefined') {
            doctorList.forEach(function(doctor) {
                if (doctor.region_id == regionId) {
                    $selectedRegionDoctors = doctor.doctors
                }
            });
        }

        return $selectedRegionDoctors;
    }

    function displayDoctorDetails(doctorId) {
        $currentSelectedRegionDoctors.forEach(function(doctor) {
            if (doctor.doctor_id == doctorId) {
                $('#doctor-details').animate({
                    "opacity": '0',
                    "display": 'none'
                }, 500, function() {
                    $('#doctor-details').hide(500, function() {
                        $('#doctor-details').empty();
                        var assistantDetails = "";
                        var assistantPhoto = "";
                        var mainPhotoCss = doctor.hasOwnProperty('assistant') ? " style='float: right; clear: right; margin-right: 60px;' " : "";
                        var fullPhotoCss = doctor.hasOwnProperty('assistant') ? " style='height: 195px; max-width: 360px; margin: 0 auto;'" : " style='height: 195px; max-width: 195px; margin: 0 auto;'";
                        if (doctor.hasOwnProperty('assistant')) {
                            var assistantBase64Photo = doctor.assistant.photo ? doctor.assistant.photo : $emptyDoctor;
                            assistantDetails = "<div class='assistant'><h5>" + doctor.assistant.name + "</h5>" + doctor.assistant.position + "<br /><strong>" + doctor.assistant.clinic_name + "</strong><br />" + doctor.assistant.clinic_address + "</div>";
                            assistantPhoto = "<div class='assistant doctor-photo'><img src= '" + assistantBase64Photo + "' alt='" + doctor.assistant.name + "'/></div>"
                            mainPhotoCss = "";
                        }
                        var mainBase64Photo = doctor.main.photo ? doctor.main.photo : $emptyDoctor;
                        $('#doctor-details').append(
                            "<div class='col-12 justify-content-center'><div" + fullPhotoCss + " ><div class='main doctor-photo' " + mainPhotoCss + "><img src= '" + mainBase64Photo + "' alt='" + doctor.main.name +
                            "'/></div>" + assistantPhoto + "</div></div><div class='col-lg-5 col-md-7 col-10 doctor-description'><div class='row justify-content-start'><div class='col-12 doctor-names'><div><h5>" +
                            doctor.main.name + "</h5>" + doctor.main.position + "<br /><strong>" + doctor.main.clinic_name + "</strong><br />" + doctor.main.clinic_address + "</div>" + assistantDetails +
                            "</div><div class='col-6'><a href='#' class='btn btn-primary' role='button'>Записаться</a></div><div class='col-6'><a href='#' class='btn btn-primary brochure-button' role='button'>Скачать брошюру</a></div></div></div>");
                        $('#doctor-details').show();
                        $('#doctor-details').animate({
                            "opacity": '1',
                            "padding-bottom": doctor.hasOwnProperty('assistant') ? "2.4rem" : "6.55rem",
                            "display": 'block'
                        }, 500);
                    });
                });
            }
        });
    }

    var min_height_was_increased = false;

    $('#dropdownDoctor a').click(function(e) {
        var $this = $(this);
        $('#faq').hide();
        $('#footer').animate({
            "padding-top": '50px'
        });
        $('#layout-footer').css({
            "background": '#f0f5f5'
        });

        if (!min_height_was_increased) {
            $('#doctor-selection').animate({
                "min-height": (parseInt($('#doctor-selection').css("min-height"), 10) + 260) + 'px'
            });
            min_height_was_increased = true;
        }

        $('#dropdownDoctor').html($this.html());
        if (excistDoctorsSlider) {
            $('#doctorsSlider').multislider('pause');
        }

        $('#doctor-result').animate({
            "opacity": '0',
            "display": 'none'
        }, 50, function() {
            $('#doctor-result').hide(50, function() {
                $('#doctor-details').animate({
                    "opacity": '0',
                    "display": 'none'
                }, 5, function() {
                    $('#doctor-details').hide(5, function() {
                        $('#doctor-details').empty();
                    });
                });
                $('#doctor-result .MS-content').empty();
                $('#doctorsSlider .MS-content .item').off("click");
                $('#doctorsSlider .MS-content .item').off("hover");
                $('#doctorsSlider .MS-content .item').off("handlerIn");
                $('#doctorsSlider .MS-content .item').off("handlerOut");

                $currentSelectedRegionDoctors = queryDoctors($this.data("region"), $doctors);

                if ($currentSelectedRegionDoctors.length > 0) {
                    createDoctorElements($('#doctor-result .MS-content'));
                    $('#doctor-description').html("В первую очередь выберите <b>регион</b> в котором вы ищите специалиста");
                    $('#doctor-result').show();
                    $('#doctor-result').animate({
                        "opacity": '1',
                        "display": 'block'
                    }, 50);

                    // Doctors Slider

                    excistDoctorsSlider = true;
                    $('#doctorsSlider').multislider();
                    if (($('#doctor-result').width() - 120 - doctorCount * 154) < 0) {
                        playDoctorsSlider = true;
                        $('#doctorsSlider').multislider('unPause');
                    } else {
                        playDoctorsSlider = false;
                        $('#doctorsSlider').multislider('pause');
                    }

                    $('#doctorsSlider .MS-content .item').hover(
                        function() {
                            $('#doctorsSlider').multislider('pause');
                        },
                        function() {
                            if (playDoctorsSlider) {
                                $('#doctorsSlider').multislider('unPause');
                            }
                        }
                    );

                    $('#doctorsSlider .MS-content .item').click(
                        function() {
                            displayDoctorDetails($(this).data("doctor-id"));
                            $('#doctorsSlider').multislider('pause');
                            $('#doctorsSlider .MS-content .item').css({
                                'background-color': '#dde1e1',
                                'border-color': '#dde1e1'
                            });
                            $(this).css({
                                'background-color': '#f5a98a',
                                'border-color': '#f5a98a'
                            });
                            playDoctorsSlider = false;
                        }
                    );

                    displayDoctorDetails($currentSelectedRegionDoctors[0].doctor_id);

                } else {
                    excistDoctorsSlider = false;
                    $('#doctor-description').html("<b>Извините, в данном регионе искомых специалистов нет.</b><br />Выберите <b>регион</b> в котором вы ищите специалиста.");
                }

            });
        });
        e.preventDefault();
    });

    // Slide svg muscules

    var currentMusculeSlide = -1;
    var pauseMusculeSlide = false;

    function slideMuscule(element, manual) {
        pauseMusculeSlide = manual;
        var currentId = element.attr('id');
        var currentAccordion = element.data("accordion");
        doAnimations($('#muscules svg image'));
        $('#muscules svg image').attr('xlink:href', element.data("image"));
        $('#muscule1-accordion').hide();
        $('#muscule2-accordion').hide();
        $('#muscule3-accordion').hide();
        $('#muscule4-accordion').hide();
        ['left-top', 'right-top', 'right-bottom', 'left-bottom'].forEach(function(item, index) {
            if (item == currentId) {
                currentMusculeSlide = index;
                $('#' + currentAccordion).show();
                doAnimations($('#' + currentAccordion));
                $('#muscules svg #' + item + ' path').css({
                    fill: "#d5724b"
                });
                if (!manual) {
                    var $animatingElems = $('#muscules svg #' + item).find("[data-animation ^= 'animated']");
                    doAnimations($animatingElems);
                }
            } else {
                $('#muscules svg #' + item + ' path').css({
                    fill: "#656e79"
                });
            }
        });
    }

    $('#muscules svg .marker').hover(
        function() {
            slideMuscule($(this), true);
        },
        function() {}
    );

    $('#muscules svg .marker').click(
        function() {
            slideMuscule($(this), true);
        }
    );

    setInterval(function() {
        if (!pauseMusculeSlide) {
            currentMusculeSlide++;
            var currentId = ['left-top', 'right-top', 'right-bottom', 'left-bottom'][currentMusculeSlide % 4];
            var $currentItem = $('#muscules svg #' + currentId);
            slideMuscule($currentItem, false);
        }
    }, 4000);

    // Youtube script
    var tag = document.createElement('script');
    tag.src = "//www.youtube.com/iframe_api";
    var firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    var $playersProperties = [{
            playerId: 'focal-player1',
            videoId: 'yG0oBPtyNb0',
            buttonSelector: '#start-focal-player1'
        },
        {
            playerId: 'focal-player2',
            videoId: '0sB3Fjw3Uvc',
            buttonSelector: '#start-focal-player2'
        }
    ];

    var players = []

    onYouTubeIframeAPIReady = function() {
        $playersProperties.forEach(function(item) {
            players.push(new YT.Player(item.playerId, {
                height: 'auto',
                width: '100%',
                videoId: item.videoId, // youtube video id
                playerVars: {
                    'autoplay': 0,
                    'rel': 0,
                    'showinfo': 0
                },
                events: {
                    'onStateChange': function(event) {
                        if (event.data == YT.PlayerState.ENDED) {
                            $(item.buttonSelector).fadeIn('normal');
                        }
                        if (event.data == YT.PlayerState.PLAYING) {
                            $(item.buttonSelector).fadeOut('normal');
                        }
                    }
                }
            }));

            var currentLastIndex = players.length - 1;

            $(document).on('click', item.buttonSelector, function() {
                $(this).fadeOut('normal');
                players[currentLastIndex].playVideo();
            });
        });
    }

    // Spastica Clinic Search
    function createClinicElement(clinic) {
        return "<li><div class='type'>Медицинское учреждение</div><h5>" + clinic.name + "</h5><div class='row justify-content-between'><div class='col-lg-5 col-6'>" +
            clinic.description + "</div><div class='col-lg-5 col-6'><a href='https://www.google.com/maps/search/?api=1&query=" + clinic.address +
            "' class='map-pin simple-link' target='_blank'>Ссылка на карту</a></div></div><div class='row justify-content-between'><div class='col-lg-5 col-6'>" + clinic.address +
            "</div><div class='col-lg-5 col-6 phone'>" + clinic.phone + "</div></div></li>";
    }

    function createClinicElements(selectedRegionClinics, element) {
        selectedRegionClinics.forEach(function(clinic) {
            element.append(createClinicElement(clinic));
        });
    }

    function queryClinics(regionId, clinicList) {
        var $selectedRegionClinics = [];

        if (typeof regionId !== 'undefined') {
            clinicList.forEach(function(clinic) {
                if (clinic.region_id == regionId) {
                    $selectedRegionClinics = clinic.clinics
                }
            });
        }

        return $selectedRegionClinics;
    }

    var $clinicSearch = [{
            dropdownText: $('#dropdownClinicGeneralised'),
            dropdown: $('#dropdownClinicListGeneralised a'),
            resultBlock: $('#first-clinic-result'),
            resultList: $("#first-clinic-result ul"),
            searchDescription: $('#first-clinic-description'),
            resultListItemSelector: "#first-clinic-result li",
            resultMoreButtonSelector: "#next-first-clinic"
        },
        {
            dropdownText: $('#dropdownClinicRegional'),
            dropdown: $('#dropdownClinicListRegional a'),
            resultBlock: $('#second-clinic-result'),
            resultList: $("#second-clinic-result ul"),
            searchDescription: $('#second-clinic-description'),
            resultListItemSelector: "#second-clinic-result li",
            resultMoreButtonSelector: "#next-second-clinic"
        }
    ];

    $clinicSearch.forEach(function(item) {
        item.dropdown.click(function(e) {
            var $this = $(this);

            item.dropdownText.html($this.html());

            item.resultBlock.animate({
                "opacity": '0',
                "display": 'none'
            }, 500, function() {
                item.resultBlock.hide(500, function() {
                    item.resultList.empty();

                    var $selectedRegionClinics = queryClinics($this.data("region"), $regionGeneralisedClinics);

                    if ($selectedRegionClinics.length > 0) {
                        createClinicElements($selectedRegionClinics, item.resultList);
                        item.searchDescription.html("Выберите <b>регион</b> в котором вы ищите клинику");
                        cropList($(item.resultListItemSelector), $(item.resultMoreButtonSelector));
                        item.resultBlock.show();
                        item.resultBlock.animate({
                            "opacity": '1',
                            "display": 'block'
                        }, 500);
                    } else {
                        item.searchDescription.html("<b>Извините, в данном регионе требуемых клиник нет.</b><br />Выберите <b>регион</b> в котором вы ищите клинику.");
                    }

                });
            });
            e.preventDefault();
        });
    });

    // Load More Clinic List
    function cropList(firstClinicList, firstClinicButton) {
        var numToShow = 3;
        var numInFirstClinicList = firstClinicList.length;
        firstClinicList.hide();
        if (numInFirstClinicList > numToShow) {
            firstClinicButton.show();
        }
        firstClinicList.slice(0, numToShow).show();

        firstClinicButton.off("click");
        firstClinicButton.click(function(e) {
            var showing = firstClinicList.filter(':visible').length;
            firstClinicList.slice(showing - 1, showing + numToShow).fadeIn();
            var nowShowing = firstClinicList.filter(':visible').length;
            if (nowShowing >= numInFirstClinicList) {
                firstClinicButton.hide();
            }
            e.preventDefault();
        });
    }

    // Carousel animations
    var $animatingBloks = [$('#carousel-life-quality') /*, $('#carousel-generalised-spastik'), $('#carousel-regional-spastik'), $('#carousel-focal-spastik')*/ ]

    $animatingBloks.forEach(function(item) {
        item.on('slide.bs.carousel', function(e) {
            var $animatingElems = $(e.relatedTarget).find("[data-animation ^= 'animated']");
            doAnimations($animatingElems);
        })
    });

    var $carouselBloks = [$('#carousel-generalised-spastik'), $('#carousel-regional-spastik'), $('#carousel-focal-spastik')]
    $carouselBloks.forEach(function(item) {
        item.carousel('pause')
    });

    // Spasity causes animation

    var spasityCausesAnimated = false;
    $(document).scroll(function() {
        if ($(this).scrollTop() > 600 && !spasityCausesAnimated) {
            var $animatingElems = $('#causes').find("[data-animation ^= 'animated']");
            doAnimations($animatingElems);
            spasityCausesAnimated = true;
        }
    });

})();