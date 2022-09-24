class coordinate {
	constructor(vkey, kkey) {
		this.vk = vkey;
		this.ik = kkey;
		this.lchar = Array("A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","0","1","2","3","4","5","6","7","8","9","-","_","=",".","@","$","%","&","#");
	}

	encrypthis(string) {
		this.s_string = string.split('');

		var a = this.vk;
		var b = this.ik;
		var c = '';
		for (var i = 0; i < this.s_string.length; i++) {
			var n_char = '';
			var x = this.s_string[i];
			var s = 0;
			if (this.lchar.indexOf(x.toUpperCase()) < 0) {
				n_char = x;
				s = 1;
			} else {
				var j = this.lchar.indexOf(x.toUpperCase());
				n_char = b[j];
				s = 2;
			}

			if (x.toUpperCase() != x && isNaN(x)) {
				n_char = n_char.toLowerCase();
			} else n_char = n_char.toUpperCase();
			c += n_char;
		}

		return c;
	}

	decrypthis(string) {
		this.s_string = string.split('');

		var a = this.vk;
		var b = this.ik;
		var j = string;
		var d = this.s_string.length;
		var c, e, f, g, h, i, k;
		c = '';
		for (var i = 0; i < d; i++) {
			g = j.substring(0, 1);
			h = j.substring(0, 2);
			if (this.lchar.indexOf(g) < 0) {
				e = f = g;
				j = j.substring(1);
				k = g;
			} else {
				e = h;
				var k = b.indexOf(e.toUpperCase());
				f = a[k];
				j = j.substring(2);
				k = h;
				i++;
			}

			if (k.toUpperCase() != k && isNaN(k)) {
				f = f.toLowerCase();
			} else f = f.toUpperCase();

			c += f;
		}
		return c;
	}
}
